import { useSelector } from 'react-redux';

const DisplayCounter = () => {
  const counterVal = useSelector((store) => store.counter.counterVal);
  const privacy = useSelector((store) => store.privacy);

  return (
    <p className="text-gray-700 text-lg md:text-2xl leading-relaxed mb-10">
      Counter current Value: {privacy ? "🔒 Hidden" : counterVal}
    </p>
  );
};

export default DisplayCounter;