import React, { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  Stethoscope,
  Phone,
  Star,
  Users,
  Ribbon,
  ShieldUser,
} from "lucide-react";
import banner from "../../assets/BannerImg.png";
import { useNavigate } from "react-router-dom";
import { bannerStyles } from "../../assets/dummyStyles";
import axios from "axios";
import CountUp from "react-countup";

const Banner = () => {
  const navigate = useNavigate();

  const [greeting, setGreeting] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [doctorCount, setDoctorCount] = useState(500);
  const [healthTipIndex, setHealthTipIndex] = useState(0);

  const healthTips = [
    "Drink at least 8 glasses of water daily 💧",
    "Exercise 30 minutes every day 🏃",
    "Get 7-8 hours of sleep 😴",
    "Regular health checkups save lives ❤️",
  ];

  // Greeting + Date
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");

    setCurrentDate(new Date().toDateString());
  }, []);

  // Health Tip rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setHealthTipIndex((prev) => (prev + 1) % healthTips.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Doctor count fetch
  useEffect(() => {
    const fetchDoctorCount = async () => {
      try {
        const res = await axios.get("/api/doctors");
        if (Array.isArray(res.data)) {
          setDoctorCount(res.data.length);
        } else if (res.data?.doctors) {
          setDoctorCount(res.data.doctors.length);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchDoctorCount();
  }, []);

  return (
    <div className={bannerStyles.bannerContainer}>
      <div className={bannerStyles.mainContainer}>
        <div className={bannerStyles.borderOutline}>
          <div className={bannerStyles.outerAnimatedBand}></div>
          <div className={bannerStyles.innerWhiteBorder}></div>
        </div>

        <div className={bannerStyles.contentContainer}>
          <div className={bannerStyles.flexContainer}>

            {/* LEFT SECTION */}
            <div className={bannerStyles.leftContent}>

              {/* Logo + Title FIRST */}
              <div className={bannerStyles.headerBadgeContainer}>
                <div className={bannerStyles.stethoscopeContainer}>
                  <div className={bannerStyles.stethoscopeInner}>
                    <Stethoscope className={bannerStyles.stethoscopeIcon} />
                  </div>
                </div>

                <div className={bannerStyles.titleContainer}>
                  <h1 className={bannerStyles.title}>
                    Medi
                    <span className={bannerStyles.titleGradient}>
                      Care+
                    </span>
                  </h1>
                </div>
              </div>

              {/* ⭐ Stars BELOW TITLE */}
              <div className="flex mt-3 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Greeting */}
              <p className="text-sm text-gray-700 mt-2">
                {greeting}, Welcome to MediCare+
              </p>

              {/* Date */}
              <p className="text-sm text-gray-500">
                Today: {currentDate}
              </p>

              {/* Online Badge */}
              <div className="mt-3 inline-flex items-center bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
                🟢 Online Consultation Available
              </div>

              {/* Tagline */}
              <p className={`${bannerStyles.tagline} mt-6`}>
                Premium Healthcare
                <span className={`block ${bannerStyles.taglineHighlight}`}>
                  At Your Fingertips
                </span>
              </p>

              {/* FEATURES (UNCHANGED) */}
              <div className={bannerStyles.featuresGrid}>
                <div className={`${bannerStyles.featureItem} ${bannerStyles.featureBorderGreen}`}>
                  <Ribbon className={bannerStyles.featureIcon} />
                  <span className={bannerStyles.featureText}>
                    Certified Specialists
                  </span>
                </div>

                <div className={`${bannerStyles.featureItem} ${bannerStyles.featureBorderBlue}`}>
                  <Clock className={bannerStyles.featureIcon} />
                  <span className={bannerStyles.featureText}>
                    24/7 Availability
                  </span>
                </div>

                <div className={`${bannerStyles.featureItem} ${bannerStyles.featureBorderEmerald}`}>
                  <ShieldUser className={bannerStyles.featureIcon} />
                  <span className={bannerStyles.featureText}>
                    Safe & Secure
                  </span>
                </div>

                {/* DOCTORS BLOCK EXACT SAME */}
                <div className={`${bannerStyles.featureItem} ${bannerStyles.featureBorderPurple}`}>
                  <Users className={bannerStyles.featureIcon} />
                  <span className={bannerStyles.featureText}>
                    <CountUp end={doctorCount} duration={2} />+ Doctors
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className={bannerStyles.ctaButtonsContainer}>
                <button
                  onClick={() => navigate("/doctors")}
                  className={bannerStyles.bookButton}
                >
                  <div className={bannerStyles.bookButtonOverlay}></div>
                  <div className={bannerStyles.bookButtonContent}>
                    <Calendar className={bannerStyles.bookButtonIcon} />
                    <span>Book Appointment Now</span>
                  </div>
                </button>

                <button
                  onClick={() => (window.location.href = "tel:9198829569")}
                  className={bannerStyles.emergencyButton}
                >
                  <div className={bannerStyles.emergencyButtonContent}>
                    <Phone className={bannerStyles.emergencyButtonIcon} />
                    <span>Emergency Call</span>
                  </div>
                </button>
              </div>

            </div>

            {/* RIGHT IMAGE */}

            <div className={bannerStyles.rightImageSection}>
              <div className={bannerStyles.imageContainer}>
                <div className={bannerStyles.imageFrame}>
                  <img
                    src={banner}
                    alt="Professional Healthcare Team"
                    className={bannerStyles.image}
                  />
                </div>
              </div>
              {/* 🔥 Health Tip BELOW IMAGE (Modified Premium Style) */}
              <div className="mt-6 flex justify-center">
                <div className="bg-gradient-to-r from-blue-50 to-green-50 
                  border border-blue-100 
                  px-6 py-3 rounded-xl 
                  shadow-sm 
                  text-sm 
                  text-gray-700 
                  font-medium 
                  max-w-md 
                  text-center 
                  transition-all duration-300 hover:shadow-md">
                  <span className="mr-2">💡</span>
                  {healthTips[healthTipIndex]}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// {/* CTA BUTTONS */}
//               <div className={bannerStyles.ctaButtonsContainer}>
//                 <button onClick={() => navigate("/doctors")} aria-label="Book Appointment" className={bannerStyles.bookButton} >
//                 <div className={bannerStyles.bookButtonOverlay}>
//                   </div> <div className={bannerStyles.bookButtonContent}> <Calendar className={bannerStyles.bookButtonIcon} />
//                   <span>Book Appointment Now</span> </div>
//                    </button>