/*
<div className="ball ball--start/ball--happy/ball--sad/ball-neutral">
<span className="ball__number">8</span>
</div>
*/

interface EightBallProps {
  face: string;
}

const EightBall: React.FC<EightBallProps> = (props) => {
  return (
    <div id="ball" className={`ball--${props.face}`}>
      <span className="ball__number">8</span>
    </div>
  );
};

export default EightBall;
