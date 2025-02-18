import React from "react";
import OneService from "./OneService";

const Services = () => {
  const data = [
    {
      name: "Flower Delivery Services",
      description:
        "We offer a variety of delivery options to ensure your flowers arrive fresh and on time. Whether you're sending flowers locally or need same-day delivery, our team works to provide timely service with a personal touch.",
      highlights: [
        "Same-Day Delivery ",
        "Need flowers delivered today? Order before 2 PM for same-day delivery in our local service areas. Ideal for birthdays, anniversaries, or spontaneous gestures of love. ",
        "Order Now for Same-Day Delivery. ",
      ],
    },
    {
      name: "Custom Floral Arrangements",
      description:
        "At Blossom Florists, we understand that each occasion is unique. Our expert florists can design a custom arrangement tailored to your specific needs. Whether you have a favorite flower in mind or need a specific color scheme, we'll work with you to bring your vision to life.",
      highlights: [
        "For Weddings  ,For Corporate Events  ,For Personal Occasions  ",
        "From bridal bouquets to centerpieces and boutonnieres, we offer custom floral design to make your wedding day unforgettable. ",
      ],
    },
    {
      name: "Flower Subscription Services",
      description:
        "Experience the joy of fresh flowers every week, month, or for special occasions. With our flower subscription service, you'll receive a hand-picked bouquet of beautiful flowers, delivered to your door on a schedule that works for you.",
      highlights: [
        "Weekly Subscription,  ",
        "Custom Subscription,  ",
        "Monthly Subscription.  ",
      ],
    },
    {
      name: "Special Occasion Flowers",
      description:
        "Whether you're celebrating a milestone or expressing sympathy, our flowers are designed to make every moment memorable. We offer special arrangements for all kinds of occasions.",
      highlights: [
        "Weddings & Engagements,  ",
        "Anniversaries,  ",
        "Funeral & Sympathy,  ",
        "Valentine's Day, Mother's Day & Holidays.",
      ],
    },
    {
      name: "Flower Care Tips",
      description:
        "We want your flowers to last as long as possible, so we've gathered a few simple tips for keeping your bouquet beautiful.",
      highlights: [
        "Change the water every 2-3 days,  ",
        "Trim the stems at an angle before placing them in a vase,  ",
        "Remove any wilted flowers to prevent them from affecting the rest of the bouquet,  ",
        "Keep your flowers in a cool place, away from direct sunlight.",
      ],
    },
    {
      name: "Gift Add-Ons",
      description:
        "Make your bouquet even more special by adding a personalized touch. Choose from a range of gift options, from chocolates and plush toys to cards and vases.",
      highlights: [
        "Handwritten Cards,   ",
        "Vases,  ",
        "Chocolates & Candies,  ",
        "Plush Toys  ",
      ],
    },
  ];
  return (
    <div className="container p-5">
      <h1 className="text-center"> Our Services</h1>
      <p className="text-center">
        “At Blossom Florists, we are dedicated to providing exceptional floral
        arrangements and reliable services. Whether you need a stunning bouquet
        for a special occasion, want to subscribe to regular flower deliveries,
        or require personalized floral design, we are here to make your floral
        experience extraordinary.”
      </p>
      <div className="container row ">
        {data.map((service) => {
          return (
            <div className="col-md-6 col-lg-4 col-xl-3">
              <OneService data={service} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
