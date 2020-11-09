import { useRef, useState, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

// export default function useMeasure() {
//   const ref = useRef()
//   const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
//   const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
//   useEffect(() => 
//     (ro.observe(ref.current), ro.disconnect)
//   , [])
//   return [{ ref }, bounds]
// }

const useObserver = ({ callback, element }) => {

  const current = element && element.current;

  const observer = useRef(null);

  useEffect(() => {
      // if we are already observing old element
      if (observer && observer.current && current) {
        observer.current.unobserve(current);
      }
      const resizeObserverOrPolyfill =  ResizeObserver;
      observer.current = new resizeObserverOrPolyfill(callback);
      observe();

      return () => {
        if (observer && observer.current && element &&
           element.current) {
          observer.current.unobserve(element.current);
        }
      };
  }, [current]);

  const observe = () => {
    if (element && element.current && observer.current) {
      observer.current.observe(element.current);
    }
  };
};
export default useObserver;
