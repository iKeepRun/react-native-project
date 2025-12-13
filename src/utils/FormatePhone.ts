export const FormatePhone = (phone: string): string => {
  const trim: string = phone.replace(/\s+/g, '');
  return [trim.slice(0, 3), trim.slice(3, 7), trim.slice(7, 11)].filter(item=>!!item).join(' ');
};

export const recoverPhone = (phone: string): string => {
  return phone.replace(/\s+/g, '');
}