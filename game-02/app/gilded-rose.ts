export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items: Array<Item> = []) {
    this.items = items;
  }

  updateQuality(): Array<Item> {
    for (const item of this.items) {
      this.updateItem(item);
    }
    return this.items;
  }

  private updateItem(item: Item): void {
    switch (item.name) {
      case 'Aged Brie':
        this.updateAgedBrie(item);
        break;
      case 'Backstage passes to a TAFKAL80ETC concert':
        this.updateBackstagePasses(item);
        break;
      case 'Sulfuras, Hand of Ragnaros':
        break;
      default:
        if (item.name.indexOf('Conjured') === 0) {
          this.updateConjuredItem(item);
        } else {
          this.updateNormalItem(item);
        }
    }
  }

  private updateAgedBrie(item: Item): void {
    this.increaseQuality(item);
    item.sellIn--;
    if (item.sellIn < 0) {
      this.increaseQuality(item);
    }
  }

  private updateBackstagePasses(item: Item): void {
    if (item.sellIn > 10) {
      this.increaseQuality(item);
    } else if (item.sellIn > 5) {
      this.increaseQuality(item, 2);
    } else if (item.sellIn > 0) {
      this.increaseQuality(item, 3);
    } else {
      item.quality = 0;
    }
    item.sellIn--;
  }

  private updateConjuredItem(item: Item): void {
    this.decreaseQuality(item, 2);
    item.sellIn--;
    if (item.sellIn < 0) {
      this.decreaseQuality(item, 2);
    }
  }

  private updateNormalItem(item: Item): void {
    this.decreaseQuality(item);
    item.sellIn--;
    if (item.sellIn < 0) {
      this.decreaseQuality(item);
    }
  }

  private increaseQuality(item: Item, amount: number = 1): void {
    item.quality = Math.min(50, item.quality + amount);
  }

  private decreaseQuality(item: Item, amount: number = 1): void {
    item.quality = Math.max(0, item.quality - amount);
  }
}
