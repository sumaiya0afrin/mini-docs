import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, ref }) => {
  return (
    <motion.div
      drag
      dragConstraints={ref}
      whileDrag={{ scale: 1.2 }}
      className="relative w-60 h-72 rounded-3xl bg-amber-300 p-5 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.title}</p>

      <div className="footer absolute bottom-0  w-full left-0 ">
        <div className="flex justify-between items-center mb-5 py-3 px-5">
          <h4>{data.storage}MB</h4>
          <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm">
            {data.downloadIcon ? <FiDownload /> : <IoCloseOutline />}
          </span>
        </div>

        {!data.downloadIcon && (
          <div className="w-full py-4 bg-amber-500 px-5">
            <progress
              className="progress !progress-warning h-1.5 w-full"
              value="40"
              max="100"
            ></progress>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
