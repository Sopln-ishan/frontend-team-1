import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { motion, useAnimation } from "framer-motion";

const FadeInWhenVisible = ({ children }, transitionDuration, delayDuration) => {
    const ref = useRef(null);
    const controls = useAnimation();
    const isInView = useInView(ref);

    useEffect(() => {
        if(isInView === true) {
            controls.start('visible');
        }
    }, [isInView]);

    return (
        <motion.div
            ref={ ref }
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 10 }
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