import Glider from 'react-glider';
import './styles.scss';
import { useRef, type ReactNode, type CSSProperties } from 'react';

interface CarouselProps {
  children?: ReactNode;
}
export function Carousel({ children }: CarouselProps) {
  const gliderRef = useRef<any>(null);

  const handleNext = () => {
    if (gliderRef.current) {
      gliderRef.current.scrollItem('next');
    }
  };

  return (
    <div className="relative">
      <Glider draggable slidesToShow={3} rewind={true} ref={gliderRef}>
        {children?.map((itm: ReactNode, i: number) => <div key={i}>{itm}</div>)}
      </Glider>

      <button
        onClick={handleNext}
        className="absolute top-10 bg-white right-0 flex items-center justify-center h-[50px] w-[50px] rounded-full text-light-blue "
        style={btnStyle}
      >
        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L7.5 7.5L1 14" stroke="#718EBF" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
}

const btnStyle: CSSProperties = {
  boxShadow: '4px 4px 18px -2px rgba(231, 228, 232, 0.8)',
};
