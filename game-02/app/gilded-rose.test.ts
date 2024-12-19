import { GildedRose, Item } from './gilded-rose';

describe('GildedRose', () => {
  it('should decrease sellIn and quality for normal items', () => {
    const items = [new Item('Normal Item', 10, 20)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(19);
  });

  it('should degrade quality twice as fast after sell by date', () => {
    const items = [new Item('Normal Item', 0, 10)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(8);
  });

  it('should not decrease quality below 0', () => {
    const items = [new Item('Normal Item', 5, 0)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
  });

  it('should increase quality of Aged Brie as it gets older', () => {
    const items = [new Item('Aged Brie', 10, 30)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(31);
  });

  it('should not increase quality above 50 for Aged Brie', () => {
    const items = [new Item('Aged Brie', 10, 50)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
  });

  it('should not alter quality or sellIn for Sulfuras', () => {
    const items = [new Item('Sulfuras, Hand of Ragnaros', 10, 80)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(80);
  });

  it('should increase quality of Backstage passes as sellIn approaches', () => {
    const items = [
      new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
    ];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(14);
    expect(items[0].quality).toBe(21);
  });

  it('should increase quality of Backstage passes by 2 when 10 days or less remain', () => {
    const items = [
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20),
    ];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(22);
  });

  it('should increase quality of Backstage passes by 3 when 5 days or less remain', () => {
    const items = [
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20),
    ];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(23);
  });

  it('should drop quality of Backstage passes to 0 after concert', () => {
    const items = [
      new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20),
    ];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  it('should degrade quality of Conjured items twice as fast', () => {
    const items = [new Item('Conjured Mana Cake', 10, 20)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(18);
  });

  it('should degrade quality of Conjured items twice as fast after sell by date', () => {
    const items = [new Item('Conjured Mana Cake', 0, 20)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(16);
  });

  it('should not decrease quality of Conjured items below 0', () => {
    const items = [new Item('Conjured Mana Cake', 1, 1)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
  });
});
