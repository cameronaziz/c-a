import styled, { keyframes, css } from 'react-emotion';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`;
const upDownAnimation = y => keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform:  translateY(${y}px)
  }
`;

const upDownWideAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`;

// const shakeKeyframe = keyframes`2%{
//   transform:translate(7px, 0) rotate(0)
// }
// 4%{
//   transform:translate(-3px, 0) rotate(0)
// }
// 6%{
//   transform:translate(9px, 0) rotate(0)
// }
// 8%{
//   transform:translate(2px, 0) rotate(0)
// }
// 10%{
//   transform:translate(10px, 0) rotate(0)
// }
// 12%{
//   transform:translate(-5px, 0) rotate(0)
// }
// 14%{
//   transform:translate(-2px, 0) rotate(0)
// }
// 16%{
//   transform:translate(2px, 0) rotate(0)
// }
// 18%{
//   transform:translate(-9px, 0) rotate(0)
// }
// 20%{
//   transform:translate(0px, 0) rotate(0)
// }
// 22%{
//   transform:translate(3px, 0) rotate(0)
// }
// 24%{
//   transform:translate(9px, 0) rotate(0)
// }
// 26%{
//   transform:translate(6px, 0) rotate(0)
// }
// 28%{
//   transform:translate(-1px, 0) rotate(0)
// }
// 30%{
//   transform:translate(-7px, 0) rotate(0)
// }
// 32%{
//   transform:translate(-8px, 0) rotate(0)
// }
// 34%{
//   transform:translate(-3px, 0) rotate(0)
// }
// 36%{
//   transform:translate(-3px, 0) rotate(0)
// }
// 38%{
//   transform:translate(3px, 0) rotate(0)
// }
// 40%{
//   transform:translate(2px, 0) rotate(0)
// }
// 42%{
//   transform:translate(-7px, 0) rotate(0)
// }
// 44%{
//   transform:translate(-1px, 0) rotate(0)
// }
// 46%{
//   transform:translate(-2px, 0) rotate(0)
// }
// 48%{
//   transform:translate(3px, 0) rotate(0)
// }
// 50%{
//   transform:translate(10px, 0) rotate(0)
// }
// 52%{
//   transform:translate(0px, 0) rotate(0)
// }
// 54%{
//   transform:translate(6px, 0) rotate(0)
// }
// 56%{
//   transform:translate(6px, 0) rotate(0)
// }
// 58%{
//   transform:translate(-2px, 0) rotate(0)
// }
// 60%{
//   transform:translate(-5px, 0) rotate(0)
// }
// 62%{
//   transform:translate(-2px, 0) rotate(0)
// }
// 64%{
//   transform:translate(-8px, 0) rotate(0)
// }
// 66%{
//   transform:translate(-2px, 0) rotate(0)
// }
// 68%{
//   transform:translate(-9px, 0) rotate(0)
// }
// 70%{
//   transform:translate(3px, 0) rotate(0)
// }
// 72%{
//   transform:translate(-9px, 0) rotate(0)
// }
// 74%{
//   transform:translate(7px, 0) rotate(0)
// }
// 76%{
//   transform:translate(-7px, 0) rotate(0)
// }
// 78%{
//   transform:translate(4px, 0) rotate(0)
// }
// 80%{
//   transform:translate(-4px, 0) rotate(0)
// }
// 82%{
//   transform:translate(1px, 0) rotate(0)
// }
// 84%{
//   transform:translate(5px, 0) rotate(0)
// }
// 86%{
//   transform:translate(-5px, 0) rotate(0)
// }
// 88%{
//   transform:translate(-5px, 0) rotate(0)
// }
// 90%{
//   transform:translate(9px, 0) rotate(0)
// }
// 92%{
//   transform:translate(7px, 0) rotate(0)
// }
// 94%{
//   transform:translate(-1px, 0) rotate(0)
// }
// 96%{
//   transform:translate(-1px, 0) rotate(0)
// }
// 98%{
//   transform:translate(-6px, 0) rotate(0)
// }
// 0%,100%{
//   transform:translate(0, 0) rotate(0)
// }
// `;

const shakeKeyframe = keyframes`2%{
  transform:translate(0, 0) rotate(-5.5deg)
}
4%{
  transform:translate(0, 0) rotate(4.5deg)
}
6%{
  transform:translate(0, 0) rotate(6.5deg)
}
8%{
  transform:translate(0, 0) rotate(-6.5deg)
}
10%{
  transform:translate(0, 0) rotate(7.5deg)
}
12%{
  transform:translate(0, 0) rotate(-1.5deg)
}
14%{
  transform:translate(0, 0) rotate(-1.5deg)
}
16%{
  transform:translate(0, 0) rotate(6.5deg)
}
18%{
  transform:translate(0, 0) rotate(.5deg)
}
20%{
  transform:translate(0, 0) rotate(1.5deg)
}
22%{
  transform:translate(0, 0) rotate(-3.5deg)
}
24%{
  transform:translate(0, 0) rotate(1.5deg)
}
26%{
  transform:translate(0, 0) rotate(-5.5deg)
}
28%{
  transform:translate(0, 0) rotate(2.5deg)
}
30%{
  transform:translate(0, 0) rotate(-1.5deg)
}
32%{
  transform:translate(0, 0) rotate(-.5deg)
}
34%{
  transform:translate(0, 0) rotate(1.5deg)
}
36%{
  transform:translate(0, 0) rotate(3.5deg)
}
38%{
  transform:translate(0, 0) rotate(-1.5deg)
}
40%{
  transform:translate(0, 0) rotate(.5deg)
}
42%{
  transform:translate(0, 0) rotate(-1.5deg)
}
44%{
  transform:translate(0, 0) rotate(7.5deg)
}
46%{
  transform:translate(0, 0) rotate(-5.5deg)
}
48%{
  transform:translate(0, 0) rotate(5.5deg)
}
50%{
  transform:translate(0, 0) rotate(5.5deg)
}
52%{
  transform:translate(0, 0) rotate(4.5deg)
}
54%{
  transform:translate(0, 0) rotate(1.5deg)
}
56%{
  transform:translate(0, 0) rotate(3.5deg)
}
58%{
  transform:translate(0, 0) rotate(6.5deg)
}
60%{
  transform:translate(0, 0) rotate(-4.5deg)
}
62%{
  transform:translate(0, 0) rotate(-6.5deg)
}
64%{
  transform:translate(0, 0) rotate(4.5deg)
}
66%{
  transform:translate(0, 0) rotate(-6.5deg)
}
68%{
  transform:translate(0, 0) rotate(3.5deg)
}
70%{
  transform:translate(0, 0) rotate(-6.5deg)
}
72%{
  transform:translate(0, 0) rotate(-1.5deg)
}
74%{
  transform:translate(0, 0) rotate(-.5deg)
}
76%{
  transform:translate(0, 0) rotate(-3.5deg)
}
78%{
  transform:translate(0, 0) rotate(7.5deg)
}
80%{
  transform:translate(0, 0) rotate(5.5deg)
}
82%{
  transform:translate(0, 0) rotate(4.5deg)
}
84%{
  transform:translate(0, 0) rotate(2.5deg)
}
86%{
  transform:translate(0, 0) rotate(-2.5deg)
}
88%{
  transform:translate(0, 0) rotate(-6.5deg)
}
90%{
  transform:translate(0, 0) rotate(-1.5deg)
}
92%{
  transform:translate(0, 0) rotate(5.5deg)
}
94%{
  transform:translate(0, 0) rotate(1.5deg)
}
96%{
  transform:translate(0, 0) rotate(1.5deg)
}
98%{
  transform:translate(0, 0) rotate(5.5deg)
}
0%,100%{
  transform:translate(0, 0) rotate(0)
}`;

export const Shake = styled.div`
  animation: ${shakeKeyframe} 15s; 
`;

export const UpDown = styled.div`
  ${tw('pin absolute')};
  animation: ${props => upDownAnimation(props && props.offset ? props.offset : '30')}
    ${props => (props && props.speed ? props.speed : '4')}s ease-in-out infinite alternate;
`;

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation} ${props => (props && props.speed ? props.speed : '18')}s ease-in-out infinite
    alternate;
  ${tw('pin absolute')};
`;

export const waveAnimation = css`
  animation: ${wave} ${props => (props && props.speed ? props.speed : '20')}s linear infinite alternate;
`;
