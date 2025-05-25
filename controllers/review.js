const Listing = require("../models/listing")
const Review = require("../models/review");

module.exports.createReview = async (req , res) => {
   let listing = await Listing.findById(req.params.id);
   console.log(req.body);
   let newReview = new Review(req.body.review);
   newReview.author = req.user._id;
   listing.reviews.push(newReview);
 
   await newReview.save();
   await listing.save();
   req.flash("success" , "New review Created!");
   res.redirect(`/listings/${listing._id}`);
 }

 module.exports.destroyReview = async (req, res) => {
    const { id, reviewId } = req.params;
    // Remove the review reference from the reviews array in the listing
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    // Delete the review document itself from the Review collection
    await Review.findByIdAndDelete(reviewId);
    req.flash("success" , "Review Deleted!");
    // Redirect back to the listing page
    res.redirect(`/listings/${id}`);
  }