export default class NumberUtils {
  public static getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  public static numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
