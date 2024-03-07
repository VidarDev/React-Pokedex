function useRandomNumber(min: number = 1, max: number = 1017): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default useRandomNumber;
