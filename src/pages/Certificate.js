import { motion } from "framer-motion";
import Certificate1 from "../img/certificate1.png";
import Certificate2 from "../img/certificate2.png";
import Certificate3 from "../img/certificate3.png";
import Certificate4 from "../img/certificate4.png";

function Certificate() {
  const certificates = [
    { id: 1, img: Certificate1 },
    { id: 2, img: Certificate2 },
    { id: 3, img: Certificate3 },
    { id: 4, img: Certificate4 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-8 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group w-full"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                <img
                  src={cert.img}
                  alt={`Certificate ${cert.id}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificate;
