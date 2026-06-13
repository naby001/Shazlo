import { BatchNode } from "./BatchNode";

export default class FeedQueue {
  constructor() {
    this.head = null;
    this.tail = null;

    this.currentBatch = null;

    this.currentIndex = 0;

    this.animateCurrentWindow = false;
  }

  addBatch(items) {
    const node = new BatchNode(items);
    console.log("Adding batch=",items)
    if (!this.head) {
      this.head = node;
      this.tail = node;

      this.currentBatch = node;

      this.currentIndex = 0;

      this.beginBatch();
    } else {
      this.tail.next = node;
      console.log("Previous batch was=", this.tail.items)
      this.tail = node;
    }
  }

  beginBatch() {
    this.animateCurrentWindow = true;
  }

  consumeAnimationFlag() {
    const val =
      this.animateCurrentWindow;

    this.animateCurrentWindow = false;

    return val;
  }

  getVisible() {
    if (!this.currentBatch)
      return [];
    // console.log(this.currentBatch.items.slice(
    //   this.currentIndex,
    //   this.currentIndex + 5
    // ))
    return this.currentBatch.items.slice(
      this.currentIndex,
      this.currentIndex + 5
    );
  }

  swipe(id) {
    if (!this.currentBatch)
      return;
    this.animateCurrentWindow=false
    this.currentIndex++;

    const batchSize =
      this.currentBatch.items.length;

    if (
      this.currentIndex >= batchSize
    ) {
      this.currentBatch =
        this.currentBatch.next;
      console.log("Moving to next batch")
      this.currentIndex = 0;

      if (this.currentBatch) {
        this.beginBatch();
      }
    }
  }
}