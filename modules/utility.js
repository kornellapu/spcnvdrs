export const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
export const invlerp = (x, y, a) => clamp((a - x) / (y - x));
export const range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a));

export const lerp = (x, y, a) => x * (1 - a) + y * a;

export const easeInOutCubic = (x, y, a) => {
    const ratio = a < 0.5 ? 4 * a * a * a : 1 - Math.pow(-2 * a + 2, 3) / 2;
    return lerp(x,y, ratio);
}

export const easeInOutSine = (x, y, a) => {
    const ratio = -(Math.cos(Math.PI * a) - 1) / 2;
    return lerp(x,y, ratio);
}

export const easeOutBounce = (x, y, a) => {
    const n1 = 7.5625;
    const d1 = 2.75;

    let ratio;
    if (a < 1 / d1) {
        ratio = n1 * a * a;
    } else if (a < 2 / d1) {
        ratio = n1 * (a -= 1.5 / d1) * a + 0.75;
    } else if (a < 2.5 / d1) {
        ratio = n1 * (a -= 2.25 / d1) * a + 0.9375;
    } else {
        ratio = n1 * (a -= 2.625 / d1) * a + 0.984375;
    }
    return lerp(x,y, ratio);
}

export const easeOutBack = (x,y, a) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    
    const ratio = 1 + c3 * Math.pow(a - 1, 3) + c1 * Math.pow(a - 1, 2);
    return lerp(x,y, ratio);
}

export const easeInOutBack = (x, y ,a) => {
    const c1 = 1.70158;
    const c2 = c1 * 1.525;
    
    const ratio = a < 0.5
      ? (Math.pow(2 * a, 2) * ((c2 + 1) * 2 * a - c2)) / 2
      : (Math.pow(2 * a - 2, 2) * ((c2 + 1) * (a * 2 - 2) + c2) + 2) / 2;
      return lerp(x,y, ratio);
}

export const easeInOutElastic = (x, y, a) => {
    const c5 = (2 * Math.PI) / 4.5;
    
    const ratio = x === 0
      ? 0
      : a === 1
      ? 1
      : a < 0.5
      ? -(Math.pow(2, 20 * a - 10) * Math.sin((20 * a - 11.125) * c5)) / 2
      : (Math.pow(2, -20 * a + 10) * Math.sin((20 * a - 11.125) * c5)) / 2 + 1;
    return lerp(x,y, ratio);
}

export const easeOutElastic = (x, y, a) => {
    const c4 = (2 * Math.PI) / 3;
    
    const ratio = a === 0
      ? 0
      : a === 1
      ? 1
      : Math.pow(2, -10 * a) * Math.sin((a * 10 - 0.75) * c4) + 1;
    return lerp(x,y, ratio);
}