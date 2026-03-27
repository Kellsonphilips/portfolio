import TestimonialSubmitForm from "@/components/TestimonialSubmitForm";

export const metadata = {
  title: "Submit Review | Philip Kelechukwu Orji Portfolio",
  description:
    "Submit your testimonial for review. Approved reviews are published on the testimonials section.",
};

export default function SubmitReviewPage() {
  return (
    <div className="pt-24 px-8 md:pl-10 lg:pl-15">
      <div className="container mx-auto px-4 py-8 mt-20">
        <h1 className="text-3xl text-primary text-center font-bold mb-4">
          Submit Your Review
        </h1>
        <p className="text-center text-secondary-color mb-8 max-w-2xl mx-auto">
          Thank you for sharing your experience. Submissions are reviewed first,
          then approved reviews appear on the website.
        </p>
        <TestimonialSubmitForm />
      </div>
    </div>
  );
}
