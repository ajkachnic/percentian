type PercentValue = string | number;

interface PercentObject {
  text: string;
  rawText: string;
  number: number;
}

const parsePercent = (value: PercentValue): PercentObject => {
  if (typeof value === 'string') {
    return {
      number: parseFloat(value) / 100,
      text: value,
      rawText: parseFloat(value).toString(),
    };
  }
  return {
    number: value,
    text: (value * 100).toString() + '%',
    rawText: (value * 100).toString(),
  };
};

export class Percent {
  text: string;
  number: number;
  rawText: string;
  constructor(value: PercentValue) {
    const { text, number, rawText } = parsePercent(value);
    this.text = text;
    this.number = number;
    this.rawText = rawText;
  }
  update(value: PercentValue) {
    const { text, number, rawText } = parsePercent(value);
    this.text = text;
    this.number = number;
    this.rawText = rawText;
  }
}
