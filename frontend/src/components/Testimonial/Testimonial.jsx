// import React, { useEffect, useRef, useState } from "react";
// import { Star } from "lucide-react";
// import { testimonialStyles } from "../../assets/dummyStyles";

// const Testimonial = () => {
//   const scrollRefLeft = useRef(null);
//   const scrollRefRight = useRef(null);
//   const [isPaused, setIsPaused] = useState(false);

//   const testimonials = [
//     {
//       id: 1,
//       name: "Dr. Sarah Johnson",
//       role: "Cardiologist",
//       rating: 5,
//       text: "The appointment booking system is incredibly efficient. It saves me valuable time and helps me focus on patient care.",
//       image:
//         "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
//       type: "doctor",
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       role: "Patient",
//       rating: 5,
//       text: "Scheduling appointments has never been easier. The interface is intuitive and reminders are very helpful!",
//       image:
//         "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
//       type: "patient",
//     },
//     {
//       id: 3,
//       name: "Dr. Robert Martinez",
//       role: "Pediatrician",
//       rating: 4,
//       text: "This platform has streamlined our clinic operations significantly. Patient management is much more organized.",
//       image:
//         "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
//       type: "doctor",
//     },
//     {
//       id: 4,
//       name: "Emily Williams",
//       role: "Patient",
//       rating: 5,
//       text: "Booking appointments online 24/7 is a game-changer. The confirmation system gives me peace of mind.",
//       image:
//         "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
//       type: "patient",
//     },
//     {
//       id: 5,
//       name: "Dr. Amanda Lee",
//       role: "Dermatologist",
//       rating: 5,
//       text: "Excellent platform for managing appointments. Automated reminders reduce no-shows dramatically.",
//       image:
//         "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
//       type: "doctor",
//     },
//     {
//       id: 6,
//       name: "David Thompson",
//       role: "Patient",
//       rating: 5,
//       text: "The wait time has reduced significantly since using this platform. Very convenient and user-friendly!",
//       image:
//         "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
//       type: "patient",
//     },
//   ];

//   const leftTestimonials = testimonials.filter((t) => t.type === "doctor");
//   const rightTestimonials = testimonials.filter((t) => t.type === "patient");

//   useEffect(() => {
//     const scrollLeft = scrollRefLeft.current;
//     const scrollRight = scrollRefRight.current;
//     if (!scrollLeft || !scrollRight) return;

//     let scrollSpeed = 0.5; // preserved animation speed
//     let rafId;

//     const smoothScroll = () => {
//       if (!isPaused) {
//         scrollLeft.scrollTop += scrollSpeed;
//         scrollRight.scrollTop -= scrollSpeed;

//         // seamless infinite loop
//         if (scrollLeft.scrollTop >= scrollLeft.scrollHeight / 2) {
//           scrollLeft.scrollTop = 0;
//         }
//         if (scrollRight.scrollTop <= 0) {
//           scrollRight.scrollTop = scrollRight.scrollHeight / 2;
//         }
//       }
//       rafId = requestAnimationFrame(smoothScroll);
//     };

//     rafId = requestAnimationFrame(smoothScroll);
//     return () => cancelAnimationFrame(rafId);
//   }, [isPaused]);

//   const renderStars = (rating) =>
//     Array.from({ length: 5 }, (_, i) => (
//       <span
//         key={i}
//         className={
//           i < rating
//             ? testimonialStyles.activeStar
//             : testimonialStyles.inactiveStar
//         }
//       >
//         <Star className={testimonialStyles.star} />
//       </span>
//     ));

//   const TestimonialCard = ({ testimonial, direction }) => (
//     <div
//       className={`${testimonialStyles.testimonialCard} ${
//         direction === "left"
//           ? testimonialStyles.leftCardBorder
//           : testimonialStyles.rightCardBorder
//       }`}
//     >
//       <div className={testimonialStyles.cardContent}>
//         <img
//           src={testimonial.image}
//           alt={testimonial.name}
//           className={testimonialStyles.avatar}
//         />
//         <div className={testimonialStyles.textContainer}>
//           <div className={testimonialStyles.nameRoleContainer}>
//             <div>
//               <h4
//                 className={`${testimonialStyles.name} ${
//                   direction === "left"
//                     ? testimonialStyles.leftName
//                     : testimonialStyles.rightName
//                 }`}
//               >
//                 {testimonial.name}
//               </h4>
//               <p className={testimonialStyles.role}>{testimonial.role}</p>
//             </div>
//             <div className={testimonialStyles.starsContainer}>
//               {renderStars(testimonial.rating)}
//             </div>
//           </div>

//           <p className={testimonialStyles.quote}>"{testimonial.text}"</p>

//           {/* Stars on small screens beneath text */}
//           <div className={testimonialStyles.mobileStarsContainer}>
//             {renderStars(testimonial.rating)}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className={testimonialStyles.container}>
//       <div className={testimonialStyles.headerContainer}>
//         <h2 className={testimonialStyles.title}>Voices of Trust</h2>
//         <p className={testimonialStyles.subtitle}>
//           Real stories from doctors and patients sharing their positive
//           experiences with our healthcare platform.
//         </p>
//       </div>

//       <div
//         className={testimonialStyles.grid}
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//       >
//         {/* Left (Doctors) */}
//         <div
//           className={`${testimonialStyles.columnContainer} ${testimonialStyles.leftColumnBorder}`}
//         >
//           <div
//             className={`${testimonialStyles.columnHeader} ${testimonialStyles.leftColumnHeader}`}
//           >
//             👩‍⚕️ Medical Professionals
//           </div>
//           <div
//             ref={scrollRefLeft}
//             className={testimonialStyles.scrollContainer}
//             // touch support: pause while swiping
//             onTouchStart={() => setIsPaused(true)}
//             onTouchEnd={() => setIsPaused(false)}
//           >
//             {[...leftTestimonials, ...leftTestimonials].map((t, i) => (
//               <TestimonialCard
//                 key={`L-${i}`}
//                 testimonial={t}
//                 direction="left"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Right (Patients) */}
//         <div
//           className={`${testimonialStyles.columnContainer} ${testimonialStyles.rightColumnBorder}`}
//         >
//           <div
//             className={`${testimonialStyles.columnHeader} ${testimonialStyles.rightColumnHeader}`}
//           >
//             🧑‍💼 Patients
//           </div>

//           <div
//             ref={scrollRefRight}
//             className={testimonialStyles.scrollContainer}
//             onTouchStart={() => setIsPaused(true)}
//             onTouchEnd={() => setIsPaused(false)}
//           >
//             {[...rightTestimonials, ...rightTestimonials].map((t, i) => (
//               <TestimonialCard
//                 key={`R-${i}`}
//                 testimonial={t}
//                 direction="right"
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* helper styles */}
//       <style>{testimonialStyles.animationStyles}</style>
//     </div>
//   );
// };

// export default Testimonial;



import React, { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const Testimonial = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  const [filter, setFilter] = useState("all");
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Cardiologist",
      rating: 5,
      text: "The appointment booking system is incredibly efficient.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
      type: "doctor",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Patient",
      rating: 5,
      text: "Scheduling appointments has never been easier!",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
      type: "patient",
    },
    {
      id: 3,
      name: "Dr. Amanda Lee",
      role: "Dermatologist",
      rating: 5,
      text: "Automated reminders reduce no-shows dramatically.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
      type: "doctor",
    },
    {
      id: 4,
      name: "Emily Williams",
      role: "Patient",
      rating: 5,
      text: "Booking appointments online gives peace of mind.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
      type: "patient",
    },
  ];

  const filtered =
    filter === "all"
      ? testimonials
      : testimonials.filter((t) => t.type === filter);

  // 🔥 ANIMATION (Independent from filter)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let speed = 0.6;

    const animate = () => {
      if (!isPaused) {
        container.scrollLeft += speed;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused]);

  // 🔥 Filter change par smooth restart (no freeze)
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.scrollLeft = 0;
    }
  }, [filter]);

  const renderStars = (rating) =>
    Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));

  return (
    <section className="py-24 bg-gradient-to-br from-[#0f2f28] via-[#0d3b33] to-[#071f1a] text-white overflow-hidden">
      
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Voices of Trust</h2>

        {/* FILTER TOGGLE */}
        <div className="flex justify-center gap-4 mt-6">
          {["all", "doctor", "patient"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2 rounded-full text-sm transition ${
                filter === type
                  ? "bg-emerald-500 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {type === "all"
                ? "All"
                : type === "doctor"
                ? "Doctors"
                : "Patients"}
            </button>
          ))}
        </div>
      </div>

      {/* HORIZONTAL SLIDER */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-8 overflow-hidden px-6"
      >
        {[...filtered, ...filtered].map((t, i) => (
          <div
            key={i}
            className="min-w-[320px] bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg 
                       transform transition duration-500 hover:rotate-1 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full border-2 border-emerald-400"
              />
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-300">{t.role}</p>
              </div>
            </div>

            <div className="flex gap-1 mb-3">
              {renderStars(t.rating)}
            </div>

            <p className="text-sm text-gray-200 leading-relaxed">
              "{t.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;