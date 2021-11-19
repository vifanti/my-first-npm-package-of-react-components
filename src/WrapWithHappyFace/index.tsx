import React from 'react';

type WrapWithHappyFaceProps = { 
  text: string;
}

const WrapWithHappyFace: React.FC<WrapWithHappyFaceProps> = ({ text }) => {
  return <div>😁{text}😁</div>
}

export default WrapWithHappyFace