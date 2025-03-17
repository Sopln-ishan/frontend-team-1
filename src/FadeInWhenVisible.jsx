import { useRef } from "react";
import { motion } from "framer-motion";

const FadeInWhenVisible = ({ children }, transitionDuration, delayDuration) => {
    const ref = useRef(null);

    return (
        <motion.div
            ref={ ref }
            variants={{
                hidden: { opacity: 0, y: 150 },
                visible: { opacity: 1, y: 0 }
            }}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition= {{ duration: transitionDuration, delay: delayDuration }}
        >  
            { children }
        </motion.div>
    );
}
 
export default FadeInWhenVisible;