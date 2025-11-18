Questions link : https://github.com/Apollo-Level2-Web-Dev/B6A1

1.  What are some differences between interfaces and types in TypeScript?

TypeScript-এ interface আর type—দুটোই ডেটার গঠন করতে ব্যবহার হয়। কিন্তু কিছু জায়গায় এদের আচরণ আলাদা।

====> interface ⇒ object/structure/class

# Interface একাধিকবার একই নামে ঘোষণা করা যায়। TypeScript এগুলোকে একত্রে মিলিয়ে নেয়। মানে interface একটু "ফ্লেক্সিবল"।

# Interface সাধারণত object-এর গঠন বোঝাতে ব্যবহার হয় এবং ক্লাসের সঙ্গে বেশি ব্যবহার করা হয়।

# অবজেক্টের structure বা ক্লাসের contract ঠিক করতে interface.

====> Type ⇒ বেশি ফ্লেক্সিবল, জটিল টাইপ বানানোর জন্য ভালো

# Type একই নামে দুবার ঘোষণা করা যায় না। করলে error দেয়।মানে type একটু "স্ট্রিক্ট"।

# Type দিয়ে বেশি ধরনের কাজ করা যায়। যেমন: union, intersection, tuple ইত্যাদি। শুধু object না—আরো জটিল টাইপও বানানো যায়।

# জটিল টাইপ বা মিশ্র ডেটা দরকার হলে type.

2.  Provide an example of using union and intersection types in TypeScript.

TypeScript-এ union টাইপ তখন ব্যবহার করা হয় যখন একটা ভেরিয়েবল একাধিক ধরনের ডেটা নিতে পারে। যেমন একটা আইডি কখনও নম্বর হবে, কখনও স্ট্রিং হবে। সেক্ষেত্রে টাইপ হবে number | string। এতে কোড আরও flexible হয়।

আর intersection টাইপ ঠিক উল্টো—এটা দুই বা তার বেশি টাইপকে একসাথে জোড়া লাগিয়ে নতুন টাইপ বানায়। যেমন আমার কাছে User আর Address নামে দুইটা টাইপ আছে। আমি চাইলে এগুলোকে & দিয়ে একত্রে করে UserWithAddress বানাতে পারি । এতে দুইটাই একসাথে থাকবে।

union = এটা অথবা ওটা,
intersection = দুইটাই একসাথে।
