export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

export const decodeHTMLEntities = (text?: string) => {
  const entities: {[key in string]: string} = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  return (text || '').replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, (match) => entities[match]);
}