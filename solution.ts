function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    return 0;
  }
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published Year: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
}

function getUniqueValues(
  arr1: (number | string)[],
  arr2: (number | string)[]
): (number | string)[] {
  const uniqueArray: (number | string)[] = [];

  for (let i = 0; i < arr1.length; i++) {
    let duplicateArr = false;
    for (let j = 0; j < uniqueArray.length; j++) {
      if (arr1[i] === uniqueArray[j]) {
        duplicateArr = true;
        break;
      }
    }
    if (!duplicateArr) {
      uniqueArray.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let duplicateArr = false;
    for (let j = 0; j < uniqueArray.length; j++) {
      if (arr2[i] === uniqueArray[j]) {
        duplicateArr = true;
        break;
      }
    }
    if (!duplicateArr) {
      uniqueArray.push(arr2[i]);
    }
  }

  return uniqueArray;
}

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  let totalPrice = 0;

  products.map((product) => {
    const normalPriceTotal = product.price * product.quantity;
    const discountPrice = product.discount
      ? (normalPriceTotal * product.discount) / 100
      : 0;
    totalPrice += normalPriceTotal - discountPrice;
  });
  return totalPrice;
}
