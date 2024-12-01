©️ [Bappa Saha Bapi](https://bappasaha.vercel.app/)


## SOLID

- **S** - Single Responsibility Principle (SRP)  
- **O** - Open/Closed Principle (OCP)  
- **L** - Liskov Substitution Principle (LSP)  
- **I** - Interface Segregation Principle (ISP)  
- **D** - Dependency Inversion Principle (DIP)  


## 🅰️ A1-Single Responsibility Principle (SRP) - Overview

**SOLID** এর 'S' হল **Single Responsibility Principle,** যা সাধারণত **SRP** নামে পরিচিত।

## SRP কি?

Single Responsibility Principle বলছে যে 'প্রতিটি সফটওয়্যার উপাদানের একটি এবং শুধুমাত্র একটি দায়িত্ব থাকা উচিত'। **[component should have one and only one responsibility']**

- [component should have one and only one (responsibility) **reason to change**]

 যখন আমরা সফটওয়্যার উপাদান বলি, তখন যদি আমরা একটি অবজেক্ট-অরিয়েন্টেড প্রোগ্রামিং ভাষা যেমন C++ এর প্রসঙ্গে কথা বলি, তবে আমাদের প্রথম মনে পড়ে একটি C++ ক্লাস।

কিন্তু এটি লক্ষ্য করা গুরুত্বপূর্ণ যে সফটওয়্যার উপাদানের ধারণাটি একটি পদ্ধতি, ফাংশন বা এমনকি একটি মডিউলকেও নির্দেশ করতে পারে। **তাই নিয়মটি বলছে যে একটি সফটওয়্যার উপাদানের শুধুমাত্র একটি দায়িত্ব থাকা উচিত।**

## উদাহরণ


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qe1s6ezpmawm2zrbz0u0.png)

আমাদের কাছে একটি ছবি আছে যা এটি ব্যাখ্যা করতে সাহায্য করবে। এটি একটি Swiss Army Knife। আপনি জানেন, একটি Swiss Army Knife বিভিন্ন কার্যকরী সরঞ্জামের সমন্বয়, প্রতিটি একটির আলাদা উদ্দেশ্য রয়েছে। এতে আপনি ক্যান ওপেনার থেকে শুরু করে মিনি কাঁচি বা স্ক্রু ড্রাইভার পর্যন্ত কিছু পেতে পারেন।

যদিও Swiss Army Knife একটি বহুমুখী সরঞ্জাম এবং খুব চাহিদাসম্পন্ন, সফটওয়্যারের ক্ষেত্রে নিয়মগুলি পরিবর্তিত হয়। যদি আপনি Swiss Army Knife কে একটি সফটওয়্যার উপাদান হিসেবে ভাবেন, তবে এটি Single Responsibility Principle লঙ্ঘন করে কারণ এতে একাধিক দায়িত্ব রয়েছে।

## What does SRP recommend?
SRP সুপারিশ করে যে আমাদের কাছে এমন একটি ছুরি থাকা উচিত যার একমাত্র দায়িত্ব কাটার কাজ করা। এটি ক্যান ওপেনার বা স্ক্রু ড্রাইভার হিসেবে ব্যবহার করা যাবে না; এটি শুধুমাত্র কাটার জন্য ব্যবহৃত হবে।



---

# 🔥A2-Single Responsibility Principle (SRP) - Detailed Overview

## পরিচিতি
 Here Single Responsibility Principle (SRP)  এই নীতিটি কিভাবে তৈরি হয়েছে তা নিয়ে বিস্তারিত আলোচনা করব।

## Square ক্লাসের উদাহরণ
দেখুন, এখানে একটি ক্লাস আছে যার নাম **Square**। এতে ৪টি মেথড রয়েছে: `calculateArea()`, `calculatePerimeter()`, `draw()`, এবং `rotate()`।

- `calculateArea` এবং `calculatePerimeter` ফাংশনগুলি সঠিকভাবে কাজ করে, অর্থাৎ তারা একটি বর্গের পাশে দেওয়া দৈর্ঘ্য অনুযায়ী এর এলাকা এবং পরিধি গণনা করে।
- `draw()` ফাংশনটি স্কোয়ারের চিত্রটি প্রদর্শনে রেন্ডার করে এবং এটি ব্যবহৃত ডিসপ্লের ধরন অনুযায়ী বিভিন্ন কোড প্রবাহ রয়েছে।
- `rotate()` ফাংশনটি স্কোয়ারের চিত্রটি ঘুরিয়ে দেয় এবং এটি আবার ডিসপ্লেতে রেন্ডার করে।


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dph5ekv4d66cpm334rna.png)

### Cohesion কি?
এই কোড স্নিপেটের প্রসঙ্গে, আমরা একটি নতুন ধারণা শিখব যার নাম **Cohesion**। সফটওয়্যার জগতে, **কোহেশন হল বিভিন্ন অংশের মধ্যে সম্পর্কের ডিগ্রি।**

#### উদাহরণ:
একটি অগোছালো আবর্জনার কৌটো দেখুন। এখানে বিভিন্ন ধরনের জিনিস রয়েছে যেমন প্লাস্টিকের ক্যান, বিয়ারের বোতল, কাগজের বর্জ্য ইত্যাদি। এগুলোর মধ্যে সম্পর্ক খুঁজে পাওয়া কঠিন।

কিন্তু যখন এগুলো আলাদা করা হয়, তখন একটি হলুদ বিনে প্লাস্টিকের বোতলগুলি দেখা যায়। যদিও বোতলগুলি একরকম নয়, তবে তাদের মধ্যে একটি সাধারণ সম্পর্ক রয়েছে: তারা সব প্লাস্টিকের তৈরি।

**Cohesion এর সংজ্ঞা অনুযায়ী**, অগোছালো আবর্জনার কৌটোর বিষয়বস্তুতে কম কোহেশন রয়েছে, এবং প্রতিটি আলাদা আবর্জনার কৌটোর বিষয়বস্তুতে উচ্চ কোহেশন রয়েছে।

## Square ক্লাসে কোহেশন
Square ক্লাসের মেথডগুলোর দিকে তাকালে:

- `calculateArea` এবং `calculatePerimeter` মেথডগুলি একে অপরের সাথে ঘনিষ্ঠভাবে সম্পর্কিত, কারণ তারা বর্গের পরিমাপ নিয়ে কাজ করে। তাই তাদের মধ্যে উচ্চ কোহেশন রয়েছে।
- `draw()` এবং `rotate()` মেথডগুলি স্কোয়ারের চিত্র রেন্ডারিং নিয়ে কাজ করে, তাই তাদের মধ্যে উচ্চ কোহেশন রয়েছে।

কিন্তু যদি আপনি সমস্ত মেথডকে একসাথে বিবেচনা করেন, তবে কোহেশনের স্তর কম। উদাহরণস্বরূপ, `calculatePerimeter()` মেথডটি `draw()` মেথডের সাথে ঘনিষ্ঠভাবে সম্পর্কিত নয় কারণ তারা সম্পূর্ণ ভিন্ন দায়িত্ব নিয়ে কাজ করে।

### সমাধান


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zgw95205h165bcq70jyr.png)

এখন আমি কিছু পরিবর্তন করব যাতে কোহেশনের স্তর বাড়ানো যায়। আমি `draw` এবং `rotate` মেথডগুলিকে একটি আলাদা ক্লাসে স্থানান্তর করব, যার নাম হবে **SquareUI**।

এভাবে, যদিও আমি মেথডগুলোকে দুইটি ক্লাসে ভাগ করেছি, আমি প্রতিটি ক্লাসে কোহেশনের স্তর বাড়িয়েছি। 

- **Square** ক্লাসে এখন দুটি মেথড ঘনিষ্ঠভাবে সম্পর্কিত, কারণ তারা বর্গের পরিমাপ নিয়ে কাজ করে।
- **SquareUI** ক্লাসে দুটি মেথডও ঘনিষ্ঠভাবে সম্পর্কিত, কারণ তারা বর্গের গ্রাফিক রেন্ডারিং নিয়ে কাজ করে।

## Coupling কি?
Coupling হল বিভিন্ন সফটওয়্যার উপাদানের মধ্যে **আন্তঃনির্ভরতায় স্তর।** [Coupling is defined as **the level of inter dependency between various software components.]**

- Loose Coupling helps attain better adherence to the **single responsibility principle**


### Student ক্লাস উদাহরণ


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1tw2khhtbtxmfrfi88bj.png)

এখন আমরা একটি **Student** ক্লাস দেখি। এর মধ্যে একটি মেথড হল `save()` যা ছাত্র ক্লাসকে সিরিয়ালাইজড ফর্মে রূপান্তরিত করে এবং ডাটাবেসে সংরক্ষণ করে। 

যদি আপনি ভবিষ্যতে MySQL থেকে MongoDB তে চলে যান, তবে বেশিরভাগ কোড পরিবর্তন করতে হবে। তাই Student ক্লাসটি ডাটাবেস স্তরের সাথে শক্তভাবে যুক্ত।

### সমাধান

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7h0jr6uy518k388xzgrj.png)

আমরা ডাটাবেস সম্পর্কিত কোডটিকে একটি নতুন **Repository** ক্লাসে স্থানান্তর করব। 

এভাবে আমরা শক্ত সংযোগ অপসারণ করেছি এবং এটিকে দুর্বল করেছি। এখন যদি আমরা অন্তর্নিহিত ডাটাবেস পরিবর্তন করি, Student ক্লাসটি পরিবর্তন বা পুনঃসংকলনের প্রয়োজন নেই; শুধুমাত্র Repository ক্লাস পরিবর্তন করতে হবে।

## উপসংহার
আমরা দুটি ধারণা দেখেছি - **Cohesion** এবং **Coupling**। 

- আমরা দেখেছি যে Low Chohesion is Bad 
- Single Responsibility Principle সর্বদা **High Cohesion** সমর্থন করে।
- আমরা দেখেছি যে শক্ত সংযোগ খারাপ।
- Single Responsibility Principle সর্বদা **Loose Cupling** সুপারিশ করে।

সুতরাং সর্বদা উচ্চ কোহেশন [**High Cohesion**] এবং দুর্বল সংযোগের [**Loose Cupling**] দিকে লক্ষ্য রাখুন। when ever we working on SRP


# 🔥A3-Single Responsibility Principle (SRP) - Modified Definition

## পরিচিতি
আমরা সংজ্ঞাটির একটি নতুন দৃষ্টিভঙ্গি দেখব।

## নতুন সংজ্ঞা
মূল নীতি বলে: **'প্রতিটি সফটওয়্যার উপাদানের একটি এবং শুধুমাত্র একটি দায়িত্ব থাকা উচিত'**। 
এখন আমরা 'দায়িত্ব' শব্দটির পরিবর্তে 'পরিবর্তনের কারণ' (reason to change) শব্দটি ব্যবহার করব। 

তাহলে নতুন সংজ্ঞা হবে: **'প্রতিটি সফটওয়্যার উপাদানের একটি এবং শুধুমাত্র একটি পরিবর্তনের কারণ থাকা উচিত'**।
- [component should have one and only one **reason to change**]

### পরিবর্তনের কারণ কি?
In the words of the Greek Philosopher - Heraclitus . **"The only thing that is constant is change"**
it always keeps changing in Software industry

### উদাহরণ
আমরা পূর্ববর্তী সেশনের **Student** ক্লাসটি ব্যবহার করব। ধরুন এই ক্লাসটি একটি সফটওয়্যার মডিউলের অংশ যা ইতিমধ্যে উৎপাদনে রয়েছে। 

#### পরিবর্তনের সম্ভাব্য কারণ:
1. ছাত্র আইডির ফরম্যাটে পরিবর্তন
2. ছাত্র নামের ফরম্যাটে পরিবর্তন
3. প্রযুক্তিগত দলের পরামর্শ অনুযায়ী ডাটাবেস ব্যাকএন্ডে পরিবর্তন

আমরা তিনটি পরিবর্তনের কারণ চিহ্নিত করেছি।

### SRP এর সমস্যা
যদি একটি সফটওয়্যার উপাদানে একাধিক পরিবর্তনের কারণ থাকে, তবে তার পরিবর্তনের ফ্রিকোয়েন্সি বাড়বে। প্রতিটি পরিবর্তন বাগ প্রবেশের সম্ভাবনা বাড়ায়, যা পুনঃপরীক্ষণের জন্য সময় এবং অর্থ ব্যয় করে।

### সমাধান
আমরা পূর্ববর্তী  যে পদক্ষেপ নিয়েছিলাম, তা আবার গ্রহণ করব। ডাটাবেস অপারেশনগুলি আলাদা **Repository** ক্লাসে স্থানান্তর করব। 

#### ক্লাস বিভাজন:
- **Student ক্লাস**: ২টি পরিবর্তনের কারণ থাকবে।
- **Repository ক্লাস**: ১টি পরিবর্তনের কারণ থাকবে।

যদিও Student ক্লাসে ২টি কারণে সমস্যা রয়েছে, তবে যদি তারা ঘনিষ্ঠভাবে সম্পর্কিত হয়, তবে তাদের একত্রিত করা যেতে পারে। উদাহরণস্বরূপ, "ছাত্রের প্রোফাইলে পরিবর্তন" বলা যেতে পারে।


## 🅱️ 02A-Open-Closed Principle (OCP)

The Open-Closed Principle (OCP) is one of the five SOLID principles of object-oriented design. It states that **software entities (classes, modules, functions, etc.) should be open for extension but closed for modification**. This means that you should be able to add new functionality to existing code without altering its source code.

## Key Concepts

- **Closed for Modification**: 
    - Existing code should not be changed when adding new features. This helps avoid introducing bugs and maintains the stability of the system.
    - **New features getting added to the software component should not have to modify the existing code.**
  
- **Open for Extension**: 
    - New functionalities can be added through new code, allowing the system to grow without modifying existing components.

## Real-World Analogy

A practical analogy to understand OCP is the **Nintendo Wii [Joy Stick] tool** gaming console:
- The Wii console comes with a basic controller and allows for various accessories (like the Wii Zapper and steering wheel) to be added without modifying the console itself.
- This design ensures that users can enhance their gaming experience without needing to alter the core system.

## Benefits of OCP

1. **Maintainability**: Reduces the risk of bugs by keeping existing code untouched.
2. **Scalability**: Facilitates easy addition of new features as requirements evolve.
3. **Reusability**: Encourages the reuse of existing modules and classes in different contexts.

## Implementation Example in Java

To illustrate OCP in practice, consider a scenario where you need to compare areas of different shapes:

## Without OCP
```java
class Square {
    int height;
    int area() { return height * height; }
}

class OpenOpenExample {
    public int compareArea(Square a, Square b) {
        return a.area() - b.area();
    }
}
```
This approach requires modification if a new shape (like Circle) is introduced.

## With OCP
By using an interface:
```java
interface Shape {
    int area();
}

class Circle implements Shape {
    int radius;
    int area() { return (int)(Math.PI * radius * radius); }
}

class Square implements Shape {
    int height;
    int area() { return height * height; }
}

class OpenClosedExample {
    public int compareArea(Shape a, Shape b) {
        return a.area() - b.area();
    }
}
```
In this design, you can add new shapes without modifying existing code, adhering to the Open-Closed Principle.

### Conclusion



The Open-Closed Principle encourages developers to design systems that are robust and adaptable.

By focusing on extending functionality rather than modifying existing code, developers can create more maintainable and scalable applications. 

In future sessions, we will explore practical coding examples that demonstrate OCP in action.

## 02B-ওপেন-ক্লোজড প্রিন্সিপল: কোড উদাহরণ

## পরিচিতি
আমরা একটি কোড উদাহরণ দেখব যা এই নীতির বাস্তবায়নকে চিত্রিত করবে।

## প্রেক্ষাপট

ধরি, **One State** একটি বীমা কোম্পানি যা মূলত স্বাস্থ্য বীমার সাথে জড়িত। তাদের বীমা গণনা একটি Java লাইব্রেরিতে কোড করা হয়েছে। 

### কোড স্নিপেট

এখানে একটি কোড স্নিপেট রয়েছে যা প্রিমিয়াম ডিসকাউন্ট ক্যালকুলেশন দেখায়:

```java
class InsurancePremiumDiscountCalculator {
    public double calculatePremiumDiscountPercent(HealthInsuranceCustomerProfile profile) {
        if (profile.isLoyalCustomer()) {
            return 10.0; // Loyal customer discount
        }
        return 0.0; // No discount
    }
}
```

- **HealthInsuranceCustomerProfile** ক্লাসে একটি `isLoyalCustomer()` পদ্ধতি রয়েছে যা সত্য (true) ফেরত দেয় যদি গ্রাহক একজন বিশ্বস্ত গ্রাহক হয়, অন্যথায় মিথ্যা (false) ফেরত দেয়।

### নতুন চ্যালেঞ্জ

ধরি, One State কোম্পানি একটি নতুন গাড়ি বীমা কোম্পানি অধিগ্রহণ করে এবং তাদের ট্যাগলাইন পরিবর্তন করে: "আপনার স্বাস্থ্য এবং গাড়ি বীমার জন্য সবকিছু"। এখন আমাদের গাড়ি বীমার ডিসকাউন্টও সমর্থন করতে হবে।

#### নতুন ক্লাস যোগ করা

আমরা একটি নতুন ক্লাস যুক্ত করি: **VehicleInsuranceCustomerProfile**। এটি **HealthInsuranceCustomerProfile** এর মতো এবং এর `isLoyal()` পদ্ধতি রয়েছে।

```java
class VehicleInsuranceCustomerProfile {
    public boolean isLoyal() {
        // Logic to determine loyalty
    }
}
```

### সমস্যা

এখন আমাদের **InsurancePremiumDiscountCalculator** ক্লাসটি পরিবর্তন করতে হবে, কারণ এর `calculate` পদ্ধতি বর্তমানে শুধুমাত্র **HealthInsuranceCustomerProfile** অবজেক্ট গ্রহণ করে। 

##OCP লঙ্ঘন

- নতুন বৈশিষ্ট্য যোগ করার জন্য আমাদের বিদ্যমান কোডে পরিবর্তন করতে হচ্ছে, যা ওপেন-ক্লোজড প্রিন্সিপলের বিরুদ্ধে যায়।
- যদি আমরা বাড়ির বীমাও সমর্থন করতে চাই, তাহলে আবার কোড পরিবর্তন করতে হবে।

## ডিজাইন পুনর্গঠন

আমরা আমাদের ডিজাইনটি পুনর্গঠন করি:

1. **CustomerProfile** নামে একটি নতুন ইন্টারফেস তৈরি করি।
2. এই ইন্টারফেসে একটি মাত্র পদ্ধতি থাকবে: `isLoyalCustomer()`।
3. উভয় **HealthInsuranceCustomerProfile** এবং **VehicleInsuranceCustomerProfile** ক্লাস এই সাধারণ ইন্টারফেসটি বাস্তবায়ন করবে।

```java
interface CustomerProfile {
    boolean isLoyalCustomer();
}

class HealthInsuranceCustomerProfile implements CustomerProfile {
    public boolean isLoyalCustomer() {
        // Logic for health insurance loyalty
    }
}

class VehicleInsuranceCustomerProfile implements CustomerProfile {
    public boolean isLoyalCustomer() {
        // Logic for vehicle insurance loyalty
    }
}
```

## নতুন ক্যালকুলেটর ক্লাস

এখন **InsurancePremiumDiscountCalculator** ক্লাসের পদ্ধতি পরিবর্তন করি:

```java
class InsurancePremiumDiscountCalculator {
    public double calculatePremiumDiscountPercent(CustomerProfile profile) {
        if (profile.isLoyalCustomer()) {
            return 10.0; // Loyal customer discount
        }
        return 0.0; // No discount
    }
}
```

## সুবিধা

- এখন আমরা যদি বাড়ির বীমার জন্য একটি নতুন ক্লাস তৈরি করি, যেমন **HomeInsuranceCustomerProfile**, এটি শুধুমাত্র **CustomerProfile** ইন্টারফেসটি বাস্তবায়ন করবে।
- আমাদের **InsurancePremiumDiscountCalculator** ক্লাসে কোনো পরিবর্তন করতে হবে না।

## উপসংহার

আমরা দেখেছি কিভাবে ডিজাইন পুনর্গঠন করে ওপেন-ক্লোজড প্রিন্সিপল অনুযায়ী কাজ করা যায়। প্রথমে ডিজাইনটি OCP অনুসরণ করছিল না, কিন্তু পুনর্গঠনের মাধ্যমে এটি OCP-র সাথে সামঞ্জস্যপূর্ণ হয়ে উঠেছে। 

এখন ডিজাইনটি ভবিষ্যতের এক্সটেনশনের জন্য আরও শক্তিশালী এবং কার্যকরী। 

এটি ছিল ওপেন-ক্লোজড প্রিন্সিপলের একটি উদাহরণ। 

## 02C-Key Takeaways from the Open-Closed Principle Code Example

### Introduction

We will summarize the key takeaways from the previous code example that illustrated the Open-Closed Principle (OCP). 

### Principal Benefits of the New Design

1. **Ease of Adding New Features**
   - The primary benefit of adhering to the Open-Closed Principle is the ease with which new features can be added to the system.
   - This ease translates into **cost savings** for development and testing.

#### Cost Savings Explained

- If we do not follow OCP, adding new features **often requires modifying existing code.** 
- Each modification increases the time spent on testing and quality assurance to ensure that no new bugs are introduced into the existing codebase.
- In contrast, when following OCP, testing new code is simpler and less time-consuming than running a full regression test suite on existing code.
- This principle is well-known among QA testers, who emphasize its importance in maintaining software quality.

### Additional Benefits

2. **Decoupling of Components**
   - By redesigning our system to conform to OCP, we inadvertently achieved a higher degree of **loose coupling** between components.
   - This decoupling aligns with the **Single Responsibility Principle (SRP)**, as each component now has a clearer purpose and responsibility.

### Interconnectedness of SOLID Principles

- It is crucial to understand that the SOLID principles are intertwined and interdependent. 
- They are most effective when applied together, providing a holistic approach to software design.

### Cautionary Note

- **Do Not Follow OCP Blindly**: 
  - While OCP is beneficial, blindly applying it can lead to an excessive number of classes, complicating your overall design.
  - For instance, if you need to fix a bug and believe that modifying existing code is necessary for an effective fix, do so without hesitation.
  - Avoid overhauling your design solely for bug fixes unless you notice recurring issues that could be mitigated by a redesign.

### Subjective Application of OCP

- Deciding when and where to apply the Open-Closed Principle is subjective rather than objective. 
- Use your judgment based on the specific context of your project.

### Conclusion

- Re-designed code to make it follow OCP
- Following OCP can lead to cost benifits in the long run.
- OPC and SRP can work together to achieve a better design.
- Do not apply the OCPblindly and introduce unwanted complexity to your code.

The lessons learned from our code example related to the Open-Closed Principle. Understanding these key takeaways will help you apply OCP effectively in your future designs. 

---

## 🔴 3️⃣ 03A-Liskov Substitution Principle (LSP)

## ভূমিকা

লিস্কভ সাবস্টিটিউশন প্রিন্সিপল (Liskov Substitution Principle) একটি গুরুত্বপূর্ণ নীতি যা অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিংয়ের ভিত্তিতে তৈরি। এই নীতির মূল বক্তব্য হল: 

- **"অবজেক্টগুলোকে তাদের সাবটাইপ দিয়ে প্রতিস্থাপন করা উচিত, যাতে প্রোগ্রামের সঠিকতা প্রভাবিত না হয়।"**

- **"Objects should be replaceable with their subtypes without affecting the correctness of the program."**

## ইনহেরিটেন্স এবং 'Is-A' সম্পর্ক

**Inheritance** হল অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিংয়ের একটি মৌলিক বৈশিষ্ট্য, যা 'Is-A' সম্পর্ক হিসেবে পরিচিত। 

### উদাহরণ ১: গাড়ি ক্লাস

ধরি, আমাদের একটি `Car` ক্লাস আছে। 

```java
class Car {
    // গাড়ির বৈশিষ্ট্য এবং পদ্ধতি
}
```

এখন, একটি `Hatchback` ক্লাস তৈরি করি যা `Car` ক্লাস থেকে সম্প্রসারিত।

```java
class Hatchback extends Car {
    // হ্যাচব্যাকের বৈশিষ্ট্য এবং পদ্ধতি
}
```

এখন আমরা বলতে পারি, "হ্যাচব্যাক একটি গাড়ি।"

### উদাহরণ ২: পাখি ক্লাস

আমাদের একটি `Bird` ক্লাস আছে এবং `Ostrich` ক্লাসটি `Bird` থেকে সম্প্রসারিত।

```java
class Bird {
    void fly() {
        // উড়ার পদ্ধতি
    }
}

class Ostrich extends Bird {
    @Override
    void fly() {
        // এখানে কিছুই নেই, কারণ উড়তে পারে না
    }
}
```

এখন আমরা বলতে পারি, "অস্ট্রিচ একটি পাখি।"

### উদাহরণ ৩: জ্বালানি ক্লাস

আমরা `Fuel` এবং `Gasoline` এর মধ্যে সম্পর্কও দেখতে পারি।

```java
class Fuel {
    // জ্বালানির বৈশিষ্ট্য এবং পদ্ধতি
}

class Gasoline extends Fuel {
    // গ্যাসোলিনের বৈশিষ্ট্য এবং পদ্ধতি
}
```

### Problems
At first glance, these examples seem perfect, but there are hidden problems with this approach. Particularly, the second example has an issue.

### Analysis
- An ostrich is a bird, but it cannot fly.
- We have a **Bird** class with a `fly` method.
- When the Ostrich class extends the Bird class, it overrides the `fly` method and leaves it unimplemented.

### অস্ট্রিচের সমস্যা

যদিও অস্ট্রিচ একটি পাখি, কিন্তু এটি উড়তে পারে না। 

যখন আমরা `Bird` ক্লাসে `fly()` মেথড তৈরি করি, তখন `Ostrich` ক্লাসে এই মেথডটি অপ্রয়োজনীয় হয়ে পড়ে। 

```java
class Ostrich extends Bird {
    @Override
    void fly() {
        // এখানে কিছুই নেই, কারণ অস্ট্রিচ উড়তে পারে না
    }
}
```

অর্থাৎ, যদি আমরা `Bird` অবজেক্টের জায়গায় `Ostrich` অবজেক্ট ব্যবহার করি এবং কেউ `fly()` মেথড কল করে, তাহলে আমাদের প্রোগ্রাম ব্যর্থ হবে।

## লিস্কভ প্রিন্সিপলের গুরুত্ব

লিস্কভ সাবস্টিটিউশন প্রিন্সিপল আমাদের বলে যে:

> "অবজেক্টগুলোকে তাদের সাবটাইপ দিয়ে প্রতিস্থাপন করা উচিত, যাতে প্রোগ্রামের সঠিকতা প্রভাবিত না হয়।"

এটি 'Is-A' সম্পর্কের চেয়ে বেশি কঠোর পরীক্ষা দাবি করে। 

### সঠিক অ্যাবস্ট্রাকশন


লিস্কভের দৃষ্টিভঙ্গি হল:



> "যদি এটি একটি হাঁসের মতো দেখায় এবং হাঁসের মতো ডাক দেয় কিন্তু ব্যাটারি প্রয়োজন হয়, তাহলে আপনার সম্ভবত ভুল অ্যাবস্ট্রাকশন হয়েছে!"


### Liskov's Perspective
The Liskov Principle requires us to move away from the 'is-a' way of thinking. A popular saying associated with this principle is:

**"If it looks like a duck and quacks like a duck but needs batteries, you probably have the wrong abstraction!"**

Instead, Liskov's way of thinking should be: **"Objects should be replaceable with their subtypes without affecting the correctness of the program."**

## উপসংহার

এখন পর্যন্ত আমরা লিস্কভ সাবস্টিটিউশন প্রিন্সিপলের একটি উচ্চ স্তরের পরিচয় পেয়েছি।


--- 

## 03B-Liskov Substitution Principle (LSP) - গভীর বিশ্লেষণ

## ভূমিকা

স্বাগতম! আজকের সেশনে আমরা লিস্কভ সাবস্টিটিউশন প্রিন্সিপল (LSP) গভীরভাবে পরীক্ষা করব। আমরা দুটি উদাহরণ নেব এবং প্রতিটির ডিজাইন ত্রুটি বিশ্লেষণ করব। পরে, আমরা LSP প্রয়োগ করে ডিজাইন উন্নত করব।

## উদাহরণ ১: গাড়ি এবং রেসিং গাড়ি

### সমস্যা চিহ্নিতকরণ

আমাদের কাছে একটি সাধারণ `Car` ক্লাস আছে এবং একটি `RacingCar` ক্লাস যা `Car` থেকে সম্প্রসারিত। 

```java
class Car {
    int getCabinWidth() {
        // গাড়ির কেবিনের প্রস্থ ফেরত দেয়
        return 50; // উদাহরণস্বরূপ
    }
}

class RacingCar extends Car {
    @Override
    int getCabinWidth() {
        // এখানে কিছুই নেই, কারণ রেসিং গাড়ির কেবিন নেই
    }
}
```

রেসিং গাড়ির জন্য, কেবিনের পরিবর্তে "ককপিট" থাকে। তাই, `RacingCar` ক্লাসে `getCabinWidth()` মেথডটি অপ্রয়োজনীয় হয়ে পড়ে।

### সমস্যা উদ্ভব

এখন, যদি আমরা `CarUtils` ক্লাসে তিনটি গাড়ির অবজেক্ট তৈরি করি:

```java
class CarUtils {
    List<Car> myCars = new ArrayList<>();
    
    void addCars() {
        myCars.add(new Car());
        myCars.add(new Car());
        myCars.add(new RacingCar());
    }
    
    void printCabinWidths() {
        for (Car car : myCars) {
            System.out.println(car.getCabinWidth());
        }
    }
}
```

এখন, প্রথম দুটি অবজেক্টের জন্য `getCabinWidth()` মেথড কাজ করবে, কিন্তু তৃতীয় অবজেক্টের জন্য এটি ব্যর্থ হবে কারণ `RacingCar` ক্লাসে মেথডটি অপ্রয়োগিত।

### সমাধান

এই সমস্যার সমাধানের জন্য আমাদের ইনহেরিটেন্স ভেঙে দিতে হবে। 

#### নতুন শ্রেণী তৈরি করা

আমরা একটি নতুন ক্লাস তৈরি করব যা `Vehicle` নামে পরিচিত। এটি সকল ধরনের পরিবহন মাধ্যমকে উপস্থাপন করবে।

```java
class Vehicle {
    int getInteriorWidth() {
        // একটি সাধারণ অভ্যন্তরীণ প্রস্থ ফেরত দেয়
        return 0; // উদাহরণস্বরূপ
    }
}

class Car extends Vehicle {
    @Override
    int getInteriorWidth() {
        return getCabinWidth();
    }
    
    int getCabinWidth() {
        return 50; // উদাহরণস্বরূপ
    }
}

class RacingCar extends Vehicle {
    @Override
    int getInteriorWidth() {
        return getCockpitWidth();
    }
    
    int getCockpitWidth() {
        return 40; // উদাহরণস্বরূপ
    }
}
```

### আপডেটেড কার ইউটিলস ক্লাস

এখন `CarUtils` ক্লাসটিকে `VehicleUtils` বলা হবে:

```java
class VehicleUtils {
    List<Vehicle> myVehicles = new ArrayList<>();
    
    void addVehicles() {
        myVehicles.add(new Car());
        myVehicles.add(new Car());
        myVehicles.add(new RacingCar());
    }
    
    void printInteriorWidths() {
        for (Vehicle vehicle : myVehicles) {
            System.out.println(vehicle.getInteriorWidth());
        }
    }
}
```

### ফলাফল

এখন, যখন আমরা `printInteriorWidths()` মেথড কল করি, প্রথম দুটি অবজেক্টের জন্য `getInteriorWidth()` মেথড কল হবে এবং তারা তাদের নিজস্ব কেবিন প্রস্থ ফেরত দেবে। তৃতীয় অবজেক্টের জন্যও একইভাবে কাজ করবে, কিন্তু এটি ককপিট প্রস্থ ফেরত দেবে।

## উপসংহার

আমরা প্রথম উদাহরণে Liskov Substitution Principle প্রয়োগ করে ডিজাইন উন্নত করেছি। এই পদ্ধতিটি "হায়ারার্কি ভাঙা" নামে পরিচিত।  [ "breaking the hierarchy." ]

---

## 03C-Liskov Substitution Principle (LSP) - দ্বিতীয় উদাহরণ

## ভূমিকা

এই সেশনে, আমরা লিস্কভ সাবস্টিটিউশন প্রিন্সিপল (LSP) প্রয়োগের একটি দ্বিতীয় উদাহরণ দেখব। আমরা একটি সাধারণ `Product` ক্লাস এবং একটি `InHouseProduct` ক্লাস ব্যবহার করব। এই উদাহরণটি ই-কমার্স সাইটের দৃষ্টিকোণ থেকে দেখা হবে, যেমন Amazon।

## উদাহরণ: পণ্য এবং ইন-হাউস পণ্য

### প্রাথমিক ডিজাইন

আমাদের কাছে একটি `Product` ক্লাস আছে যা ডিসকাউন্ট ভেরিয়েবল এবং একটি `getDiscount()` মেথড ধারণ করে। 

```java
class Product {
    double discount = 20; // বেস ডিসকাউন্ট 20%

    double getDiscount() {
        return discount; // ডিসকাউন্ট ফেরত দেয়
    }
}

class InHouseProduct extends Product {
    void applyExtraDiscount() {
        discount *= 1.5; // ডিসকাউন্ট 1.5 গুণ বৃদ্ধি
    }
}
```

### সমস্যা চিহ্নিতকরণ

এখন, আমরা একটি `PricingUtils` ক্লাস তৈরি করি যা তিনটি অবজেক্ট তৈরি করে: দুটি সাধারণ পণ্য এবং একটি ইন-হাউস পণ্য। 

```java
class PricingUtils {
    List<Product> products = new ArrayList<>();

    void addProducts() {
        products.add(new Product());
        products.add(new Product());
        products.add(new InHouseProduct());
    }

    void printDiscounts() {
        for (Product product : products) {
            if (product instanceof InHouseProduct) {
                ((InHouseProduct) product).applyExtraDiscount(); // ইন-হাউস পণ্যের জন্য অতিরিক্ত ডিসকাউন্ট প্রয়োগ
            }
            System.out.println(product.getDiscount()); // ডিসকাউন্ট প্রিন্ট
        }
    }
}
```

### ডিজাইন ত্রুটি

এই ডিজাইনে, `PricingUtils` ক্লাসটি `instanceof` অপারেটর ব্যবহার করে অবজেক্টের টাইপ পরীক্ষা করছে। এটি Liskov Substitution Principle এর বিরুদ্ধে যায়, কারণ আমাদের সব পণ্যকে `Product` অবজেক্ট হিসেবে পরিচালনা করা উচিত।

## সমাধান

### কোড পুনর্গঠন

আমরা `InHouseProduct` ক্লাসে `getDiscount()` মেথডটি ওভাররাইড করব যাতে এটি অতিরিক্ত ডিসকাউন্ট প্রয়োগ করে।

```java
class InHouseProduct extends Product {
    @Override
    double getDiscount() {
        applyExtraDiscount(); // অতিরিক্ত ডিসকাউন্ট প্রয়োগ
        return discount; // নতুন ডিসকাউন্ট ফেরত দেয়
    }
}
```

### আপডেটেড প্রাইজিং ইউটিলস ক্লাস

এখন `PricingUtils` ক্লাসে `instanceof` চেক বাদ দেওয়া হবে:

```java
class PricingUtils {
    List<Product> products = new ArrayList<>();

    void addProducts() {
        products.add(new Product());
        products.add(new Product());
        products.add(new InHouseProduct());
    }

    void printDiscounts() {
        for (Product product : products) {
            System.out.println(product.getDiscount()); // ডিসকাউন্ট প্রিন্ট
        }
    }
}
```

### ফলাফল

এখন, যখন আমরা `printDiscounts()` মেথড কল করি, এটি সব পণ্যকে তাদের নিজস্ব ডিসকাউন্ট ফেরত দেবে, এবং ইন-হাউস পণ্যের জন্য অতিরিক্ত ডিসকাউন্টও প্রয়োগ হবে। এইভাবে, আমরা Liskov Substitution Principle এর পরীক্ষায় সফল হয়েছি।

## উপসংহার

আমরা দুটি সমস্যা সমাধানের প্যাটার্ন দেখেছি। প্রথম উদাহরণের সমাধান ছিল "হায়ারার্কি ভাঙা", এবং দ্বিতীয় উদাহরণের সমাধান ছিল **"Tell, Don't Ask"** নীতি অনুসরণ করা। 


--- 



## 🔴 4️⃣ 04A-Interface Segregation Principle (ISP)  পরিচিতি

## ভূমিকা

 আমরা SOLID নীতির 'I' অর্থাৎ ইন্টারফেস সেগ্রেগেশন প্রিন্সিপল (Interface Segregation Principle) আলোচনা করব। এই নীতি অনুযায়ী, **"কোন ক্লায়েন্টকে এমন মেথডের ওপর নির্ভর করতে বাধ্য করা উচিত নয় যা সে ব্যবহার করে না।"**


- The Interface Segregation Principle states: **"No client should be forced to depend on methods it does not use."**

## বাস্তব জীবনের উদাহরণ

ধরি, আপনি একটি অফিসে কাজ করছেন যেখানে প্রায় ২০০ জন কর্মচারী রয়েছে। অফিসে বিভিন্ন প্রিন্টার, স্ক্যানার এবং ফ্যাক্স মেশিন রয়েছে। 

### ডিভাইসের প্রতিনিধিত্ব

আপনাকে এই ডিভাইসগুলোকে অবজেক্ট ওরিয়েন্টেড ধারণায় উপস্থাপন করতে বলা হয়েছে। আপনি একটি মাল্টি-ফাংশনাল ডিভাইস, যেমন Xerox WorkCentre দেখতে পান, যা প্রিন্টার, স্ক্যানার, কপিয়ার এবং ফ্যাক্স মেশিন সবকিছু একসাথে করে।

### ইন্টারফেস ডিজাইন

আপনি একটি ইন্টারফেস `IMultiFunction` ডিজাইন করেন:

```java
interface IMultiFunction {
    void print();
    void getPrintSpoolDetails();
    void scan();
    void scanPhoto();
    void fax();
    void internetFax();
}
```

এখন আপনি `XeroxWorkCentre` ক্লাস তৈরি করেন যা এই ইন্টারফেসটি বাস্তবায়ন করে:

```java
class XeroxWorkCentre implements IMultiFunction {
    @Override
    public void print() { /* Implementation */ }
    @Override
    public void getPrintSpoolDetails() { /* Implementation */ }
    @Override
    public void scan() { /* Implementation */ }
    @Override
    public void scanPhoto() { /* Implementation */ }
    @Override
    public void fax() { /* Implementation */ }
    @Override
    public void internetFax() { /* Implementation */ }
}
```

### অন্য ডিভাইসের সমস্যা

এখন আপনি HP প্রিন্টার-স্ক্যানার দেখতে পান। এটি `IMultiFunction` ইন্টারফেসটি বাস্তবায়ন করে:

```java
class HPPrinterScanner implements IMultiFunction {
    @Override
    public void print() { /* Implementation */ }
    @Override
    public void getPrintSpoolDetails() { /* Implementation */ }
    @Override
    public void scan() { /* Implementation */ }
    @Override
    public void scanPhoto() { /* Implementation */ }
    
    // ফ্যাক্স সম্পর্কিত মেথডগুলোর জন্য খালি বাস্তবায়ন
    @Override
    public void fax() {}
    @Override
    public void internetFax() {}
}
```

এখন আপনি একটি Canon ডিভাইস দেখেন যা শুধুমাত্র প্রিন্টিং ফাংশন সমর্থন করে:

```java
class CanonPrinter implements IMultiFunction {
    @Override
    public void print() { /* Implementation */ }
    @Override
    public void getPrintSpoolDetails() { /* Implementation */ }

    // অন্যান্য মেথডগুলোর জন্য খালি বাস্তবায়ন
    @Override
    public void scan() {}
    @Override
    public void scanPhoto() {}
    @Override
    public void fax() {}
    @Override
    public void internetFax() {}
}
```

### সমস্যা চিহ্নিতকরণ

এখন আপনি দেখতে পাচ্ছেন যে খালি বাস্তবায়নগুলো একটি ডিজাইন ত্রুটি নির্দেশ করছে। 

#### খালি বাস্তবায়নের সমস্যা

ধরি, আপনার অফিসে একটি কর্মচারী পোর্টাল অ্যাপ্লিকেশন রয়েছে যা এই ডিভাইসগুলোতে সরাসরি অ্যাক্সেস করতে চায়। 

যদি একজন প্রোগ্রামার `CanonPrinter` ক্লাসের `fax()` মেথড কল করে, সে জানে না যে এটি খালি। সে ধরে নেয় যে এটি কাজ করবে এবং কোডটি ব্যর্থ হবে।

## উপসংহার

এই কারণে ইন্টারফেস সেগ্রিগেশন প্রিন্সিপল এমন ডিজাইনগুলো এড়াতে সুপারিশ করে। 


---

# 🔥04B-Interface Segregation Principle (ISP) - সমাধান

## ভূমিকা

স্বাগতম! আজকের সেশনে আমরা আগের সেশনে চিহ্নিত সমস্যাগুলো সমাধান করব। আমরা দেখব কীভাবে একটি বড় ইন্টারফেসকে ছোট ছোট ইন্টারফেসে বিভক্ত করে ডিজাইন উন্নত করা যায়।

## সমস্যা পুনরুদ্ধার

আমাদের কাছে একটি সাধারণ `IMultiFunction` ইন্টারফেস এবং তিনটি ক্লাস রয়েছে যা এই ইন্টারফেসটি বাস্তবায়ন করে। কিন্তু, কিছু মেথড সব ক্লাসের জন্য প্রাসঙ্গিক নয়, তাই কিছু মেথডের খালি বাস্তবায়ন রয়েছে।

### সমাধানের পদ্ধতি

এখন, এই সমস্যার সহজ সমাধান হল বড় ইন্টারফেসটিকে ছোট ছোট ইন্টারফেসে বিভক্ত করা। 

### নতুন ইন্টারফেস ডিজাইন

আমরা `IMultiFunction` ইন্টারফেসটিকে তিনটি আলাদা ইন্টারফেসে বিভক্ত করব:

1. **IPrint**: প্রিন্টিং সম্পর্কিত মেথডগুলি ধারণ করবে।
2. **IScan**: স্ক্যানিং সম্পর্কিত মেথডগুলি ধারণ করবে।
3. **IFax**: ফ্যাক্স সম্পর্কিত মেথডগুলি ধারণ করবে।

```java
interface IPrint {
    void print();
    void getPrintSpoolDetails();
}

interface IScan {
    void scan();
    void scanPhoto();
}

interface IFax {
    void fax();
    void internetFax();
}
```

### ক্লাসগুলোর পরিবর্তন

#### Xerox WorkCentre

`XeroxWorkCentre` ক্লাস এখন সব তিনটি ইন্টারফেস বাস্তবায়ন করবে:

```java
class XeroxWorkCentre implements IPrint, IScan, IFax {
    @Override
    public void print() { /* Implementation */ }
    
    @Override
    public void getPrintSpoolDetails() { /* Implementation */ }
    
    @Override
    public void scan() { /* Implementation */ }
    
    @Override
    public void scanPhoto() { /* Implementation */ }
    
    @Override
    public void fax() { /* Implementation */ }
    
    @Override
    public void internetFax() { /* Implementation */ }
}
```

#### HP Printer-Scanner

`HPPrinterScanner` ক্লাস এখন `IPrint` এবং `IScan` ইন্টারফেসগুলি বাস্তবায়ন করবে:

```java
class HPPrinterScanner implements IPrint, IScan {
    @Override
    public void print() { /* Implementation */ }
    
    @Override
    public void getPrintSpoolDetails() { /* Implementation */ }
    
    @Override
    public void scan() { /* Implementation */ }
    
    @Override
    public void scanPhoto() { /* Implementation */ }
}
```

#### Canon Printer

`CanonPrinter` ক্লাস শুধুমাত্র `IPrint` ইন্টারফেসটি বাস্তবায়ন করবে:

```java
class CanonPrinter implements IPrint {
    @Override
    public void print() { /* Implementation */ }
    
    @Override
    public void getPrintSpoolDetails() { /* Implementation */ }
}
```

### ফলাফল

এখন আপনি দেখতে পাচ্ছেন যে ক্লাসগুলোর ডিজাইন অনেক পরিষ্কার হয়েছে। আর কোনো খালি বাস্তবায়ন নেই। যদি আমরা এই ক্লাসগুলোকে একটি লাইব্রেরি হিসেবে প্যাকেজ করি এবং অন্য প্রোগ্রামারদের কাছে পাঠাই, তাহলে কোনো বিভ্রান্তি থাকবে না। 

প্রোগ্রামাররা কেবলমাত্র সংজ্ঞায়িত মেথডগুলোই কল করতে পারবে, যা সঠিকভাবে কাজ করবে।

## উপসংহার

আমরা ইন্টারফেসগুলোকে সেগ্রিগেট করে সমস্যার সমাধান করেছি, যা ইন্টারফেস সেগ্রিগেশন প্রিন্সিপলের একটি উদাহরণ। 

যদি আপনি মনে করেন যে প্রিন্টার, স্ক্যানার এবং ফ্যাক্স মেশিনের মধ্যে কিছু সাধারণ ফাংশন রয়েছে, তবে আপনি একটি প্যারেন্ট ইন্টারফেস তৈরি করতে পারেন যা সাধারণ মেথডগুলো ধারণ করবে এবং `IPrint`, `IScan`, এবং `IFax` ইন্টারফেসগুলো সেই প্যারেন্ট ইন্টারফেস থেকে সম্প্রসারিত হবে।

---



# 🔥04C-স্ট্যান্ডার্ড কৌশল যা ISP লঙ্ঘনের চিহ্নিতকরণে সহায়ক হবে এবং দেখব কিভাবে ISP অন্যান্য SOLID নীতির সাথে সম্পর্কিত। 


## ভূমিকা

স্বাগতম! আজকের সেশনে, আমরা ইন্টারফেস সেগ্রিগেশন প্রিন্সিপল (ISP) লঙ্ঘনের কিছু সাধারণ সনাক্তকরণ কৌশল আলোচনা করব এবং এই নীতির অন্যান্য SOLID নীতির সাথে সম্পর্ক দেখব।

## ISP লঙ্ঘনের সনাক্তকরণ কৌশল

### ১. ফ্যাট ইন্টারফেস (Fat Interfaces)

ফ্যাট ইন্টারফেস বলতে বোঝায় যে ইন্টারফেসগুলির মধ্যে অনেক বেশি মেথড থাকে। উদাহরণস্বরূপ, আমাদের `IMultiFunction` ইন্টারফেসে ৬টি মেথড ছিল যা বিভিন্ন কার্যক্রম যেমন প্রিন্টিং, স্ক্যানিং এবং ফ্যাক্সিং পরিচালনা করে। 

এটি প্রায়শই ইন্টারফেস সেগ্রিগেশন প্রিন্সিপলের লঙ্ঘনের একটি সূচক।

### ২. কম কোহেশন (Low Cohesion)

যদি ইন্টারফেসের মধ্যে বিভিন্ন ধরনের কার্যক্রম একত্রিত করা হয়, তবে এটি কম কোহেশন নির্দেশ করে। উদাহরণস্বরূপ, `IMultiFunction` ইন্টারফেসের মধ্যে ফ্যাক্স এবং ফটোস্ক্যানের মতো দুটি সম্পূর্ণ ভিন্ন কার্যক্রম ছিল। 

একটি ফ্যাক্স মেশিন একটি প্রিন্টেড কাগজ টেলিফোন লাইনের মাধ্যমে পাঠায়, যেখানে অন্যটি একটি ছবির রঙ ডিজিটালি ক্যাপচার করে। 

এটি নির্দেশ করে যে `IMultiFunction` ইন্টারফেসে কম কোহেশন রয়েছে এবং এটি ISP লঙ্ঘনের সম্ভাবনা নির্দেশ করে।

### ৩. খালি বাস্তবায়ন (Empty Implementations)

যখন কিছু ক্লাস নির্দিষ্ট মেথডের বাস্তবায়ন খালি রাখতে বাধ্য হয়, তখন এটি ISP লঙ্ঘনের একটি সুস্পষ্ট চিহ্ন। খালি বাস্তবায়নগুলি ডিজাইন ত্রুটি নির্দেশ করে এবং এটি এড়ানো উচিত।

## ISP এর অন্যান্য SOLID নীতির সাথে সম্পর্ক

### একক দায়িত্ব নীতি (Single Responsibility Principle)

যখন আমরা ইন্টারফেসগুলোকে বিভক্ত করি, তখন প্রতিটি ইন্টারফেসের একটি নির্দিষ্ট দায়িত্ব থাকে। উদাহরণস্বরূপ:

- `IPrint` ইন্টারফেস শুধুমাত্র প্রিন্টিং সম্পর্কিত মেথড ধারণ করে।
- `IScan` ইন্টারফেস শুধুমাত্র স্ক্যানিং সম্পর্কিত মেথড ধারণ করে।

এভাবে, আমরা অজান্তেই একক দায়িত্ব নীতির অনুসরণ করছি।

### লিস্কভ সাবস্টিটিউশন নীতি (Liskov Substitution Principle)

ইন্টারফেসগুলোকে সেগ্রিগেট করার ফলে, আমরা লিস্কভ সাবস্টিটিউশন নীতিরও অনুসরণ করছি। উদাহরণস্বরূপ, যেখানে `IPrint` ইন্টারফেস ব্যবহৃত হচ্ছে, সেখানে `CanonPrinter` ক্লাসকে প্রতিস্থাপন করা সম্ভব।

## উপসংহার

আপনি দেখতে পাচ্ছেন যে SOLID নীতিগুলো পরস্পর সংযুক্ত এবং একে অপরকে সমর্থন করে। এই নীতিগুলো একসাথে কাজ করে একটি ভাল ডিজাইনের উদ্দেশ্য অর্জনে সহায়তা করে।


---


## 🔴 5️⃣05A-Dependency Inversion Principle (DIP) - পরিচিতি

## ভূমিকা

আজকের সেশনে আমরা SOLID নীতির 'D', অর্থাৎ ডিপেনডেন্সি ইনভারশন প্রিন্সিপল (Dependency Inversion Principle) আলোচনা করব। এই নীতির মূল বক্তব্য হল:

1. **"High Level Modules should not depend on Low Level Modules. Both should depend on abstractions."**
2. **"Abstractions should not depend on details. Details should depend on abstractions."**

এই দুটি অংশের মধ্যে মূল ধারণাটি একই, এবং আমরা শীঘ্রই এটি বুঝতে পারব।

## উচ্চ স্তরের এবং নিম্ন স্তরের মডিউল

### উদাহরণ

ধরি, আপনি একটি ই-কমার্স ওয়েবসাইট পরিচালনা করছেন। এই সফটওয়্যারটি জটিল এবং এতে হাজার হাজার লাইনের কোড রয়েছে। 

### উচ্চ স্তরের মডিউল

যদি আমরা একটি খুব উচ্চ স্তরের ডিজাইন মডেল তৈরি করি, তাহলে এটি তিনটি প্রধান ব্যবসায়িক কার্যক্রমে বিভক্ত হবে:

- **ProductCatalog**
- **PaymentProcessor**
- **CustomerProfile**

এই মডিউলগুলো ব্যবসায়িক কার্যক্রমের সাথে ঘনিষ্ঠভাবে সম্পর্কিত এবং এগুলোকে উচ্চ স্তরের মডিউল বলা হয়।

### নিম্ন স্তরের মডিউল

এখন, নিম্ন স্তরের মডিউলগুলোর দিকে তাকালে, আমরা দেখতে পাই:

- **SQLProductRepository**
- **GooglePayGateway**
- **WireTransfer**
- **EmailSender**
- **VoiceDialer**

এই মডিউলগুলো বাস্তবায়ন বিস্তারিত নিয়ে কাজ করে এবং তাই এগুলোকে নিম্ন স্তরের মডিউল বলা হয়।

### আপেক্ষিকতা

একটি গুরুত্বপূর্ণ দিক হল যে, একটি মডিউল উচ্চ বা নিম্ন স্তরের কিনা তা আপেক্ষিক। উদাহরণস্বরূপ, `Communication` মডিউল কখনও কখনও উচ্চ স্তরের এবং কখনও নিম্ন স্তরের হতে পারে, নির্ভর করে এটি কোন কনটেক্সটে ব্যবহৃত হচ্ছে।

## DIP লঙ্ঘন চিহ্নিতকরণ

### বর্তমান সম্পর্ক

আমরা যদি `ProductCatalog` থেকে `SQLProductRepository` এর দিকে একটি নির্ভরতা দেখি, তাহলে এটি নির্দেশ করে যে `ProductCatalog` একটি উচ্চ স্তরের মডিউল যা `SQLProductRepository` এর ওপর নির্ভরশীল। 

এটি DIP এর বিরুদ্ধে যায় কারণ উচ্চ স্তরের মডিউলগুলোকে নিম্ন স্তরের মডিউলের ওপর নির্ভরশীল হওয়া উচিত নয়।

### কোড উদাহরণ

```java
class SQLProductRepository {
    public List<String> getAllProductNames() {
        // SQL SELECT statement to fetch product names
    }
}

class ProductCatalog {
    private SQLProductRepository repository = new SQLProductRepository();

    public void displayProducts() {
        List<String> productNames = repository.getAllProductNames();
        // Display products
    }
}
```

এখানে `ProductCatalog` সরাসরি `SQLProductRepository` এর ওপর নির্ভরশীল, যা DIP লঙ্ঘন করে।

## DIP সমাধান

### ইন্টারফেস তৈরি করা

আমরা একটি ইন্টারফেস তৈরি করব, যা `ProductRepository` নামে পরিচিত হবে। `SQLProductRepository` এই ইন্টারফেসটি বাস্তবায়ন করবে।

```java
interface ProductRepository {
    List<String> getAllProductNames();
}

class SQLProductRepository implements ProductRepository {
    public List<String> getAllProductNames() {
        // SQL SELECT statement to fetch product names
    }
}
```

### ফ্যাক্টরি প্যাটার্ন ব্যবহার করা

এখন আমরা `SQLProductRepository` অবজেক্টটি `ProductCatalog` ক্লাসে সরাসরি ইনস্ট্যানশিয়েট করব না। বরং, একটি ফ্যাক্টরি ক্লাস ব্যবহার করব যা এই অবজেক্টটি তৈরি করবে।

```java
class RepositoryFactory {
    public static ProductRepository create() {
        return new SQLProductRepository();
    }
}

class ProductCatalog {
    private ProductRepository repository = RepositoryFactory.create();

    public void displayProducts() {
        List<String> productNames = repository.getAllProductNames();
        // Display products
    }
}
```

এখন, `ProductCatalog` ইন্টারফেসের ওপর নির্ভরশীল, যা আমাদের DIP অনুসরণ করছে।

## দ্বিতীয় অংশ: abstraction এবং Details

### পরিবর্তিত সম্পর্ক

এখন, `SQLProductRepository` ইন্টারফেসের মাধ্যমে `ProductCatalog` এর সাথে যুক্ত হয়েছে। 

এখন নিম্ন স্তরের মডিউল (যেমন `SQLProductRepository`) আবstraction (যেমন `ProductRepository`) এর ওপর নির্ভরশীল, যা DIP এর দ্বিতীয় অংশের সাথে সঙ্গতিপূর্ণ।

## উপসংহার

আমরা শুরুতে DIP লঙ্ঘনের একটি উদাহরণ দেখেছি এবং পরে কিভাবে কোড পুনর্গঠন করে এই নীতিটি অনুসরণ করা যায় তা শিখেছি। 

DIP আমাদের সফটওয়্যার ডিজাইনে নমনীয়তা এবং বজায় রাখার ক্ষমতা বৃদ্ধি করতে সহায়ক। 

---

# 🔥05Bডিপেন্ডেন্সি ইনজেকশন বুঝতে

ডিপেন্ডেন্সি ইনজেকশন (DI) একটি সফটওয়্যার ডিজাইন প্যাটার্ন যা ক্লাস এবং তাদের নির্ভরতাগুলির মধ্যে বিচ্ছিন্নতা তৈরি করে, যা আরও নমনীয় এবং রক্ষণাবেক্ষণযোগ্য কোডের দিকে নিয়ে যায়। DI এবং ডিপেন্ডেন্সি ইনভার্সন প্রিন্সিপল (DIP) এর মধ্যে পার্থক্য করা গুরুত্বপূর্ণ, যা SOLID নীতিগুলির একটি এবং উচ্চ স্তরের এবং নিম্ন স্তরের মডিউলের মধ্যে নির্ভরতাগুলি কমাতে লক্ষ্য রাখে।

### Key Concepts of Dependency Injection

1. **সংজ্ঞা**: ডিপেন্ডেন্সি ইনজেকশন হল একটি কৌশল যেখানে একটি অবজেক্ট (ক্লায়েন্ট) তার নির্ভরতাগুলি বাইরের উৎস থেকে গ্রহণ করে, বরং অভ্যন্তরীণভাবে সেগুলি তৈরি করে। এটি শিথিল সংযোগ প্রচার করে এবং কোডের পরীক্ষাযোগ্যতা ও রক্ষণাবেক্ষণযোগ্যতা বাড়ায়।

2. **দায়িত্বের পৃথকীকরণ**: DI ব্যবহার করে, নির্ভরতাগুলি তৈরি করার দায়িত্ব সেই ক্লাস থেকে আলাদা হয় যা সেগুলি ব্যবহার করে। এর মানে হল যে একটি ক্লাসকে তার নির্ভরতাগুলি কীভাবে ইনস্ট্যানশিয়েট করতে হবে তা জানার প্রয়োজন নেই, ফলে এর জটিলতা কমে যায়।

3. **ডিপেন্ডেন্সি ইনজেকশনের প্রকার**:
   - **Constructor Injection** নির্ভরতাগুলি ক্লাসের কনস্ট্রাক্টরের মাধ্যমে প্রদান করা হয়।
   - **Setter Injection**: নির্ভরতাগুলি সেটার মেথডের মাধ্যমে প্রদান করা হয়।
   - **Interface Injection**: একটি ইন্টারফেস ক্লায়েন্টে নির্ভরতাগুলি ইনজেক্ট করার জন্য একটি পদ্ধতি প্রদান করে।


### উদাহরণ পরিস্থিতি

ধরি, আমাদের একটি `ProductCatalog` ক্লাস আছে যা কাজ করার জন্য একটি `ProductRepository` প্রয়োজন। DI ছাড়া, `ProductCatalog` সরাসরি `SQLProductRepository` তৈরি করতে পারে, যা টাইট কাপলিংয়ের দিকে নিয়ে যায়:

```java
public class ProductCatalog {
    private SQLProductRepository repository;

    public ProductCatalog() {
        this.repository = new SQLProductRepository(); // টাইট কাপলিং
    }
}
```

ডিপেন্ডেন্সি ইনজেকশনের সাথে, আমরা `ProductCatalog` কে তার কনস্ট্রাক্টরে একটি `ProductRepository` গ্রহণ করতে পরিবর্তন করতে পারি:

```java
public class ProductCatalog {
    private ProductRepository repository;

    public ProductCatalog(ProductRepository repository) {
        this.repository = repository; // লুজ কাপলিং
    }
}
```

এখন, যখন আমরা `ProductCatalog` এর একটি উদাহরণ তৈরি করি, আমরা নির্ভরতা ইনজেক্ট করি:

```java
public class Main {
    public static void main(String[] args) {
        ProductRepository repository = new SQLProductRepository();
        ProductCatalog catalog = new ProductCatalog(repository);
    }
}
```

### ডিপেন্ডেন্সি ইনজেকশনের সুবিধা

- **লুজ কাপলিং**: ক্লাসগুলি কংক্রিট বাস্তবায়নের উপর কম নির্ভরশীল হয়, যা বাস্তবায়নগুলি পরিবর্তন করা সহজ করে তোলে।
- **পরীক্ষাযোগ্যতা**: পরীক্ষার সময় সহজেই নির্ভরতাগুলিকে মক বা স্টাব করা যায়, ফলে ইউনিট টেস্টগুলি বাইরের ফ্যাক্টরগুলির (যেমন ডেটাবেস বা ওয়েব সার্ভিস) উপর নির্ভরশীল হয় না।
- **রক্ষণাবেক্ষণযোগ্যতা**: সিস্টেমের এক অংশে পরিবর্তন (যেমন SQL থেকে NoSQL এ পরিবর্তন) অন্য অংশগুলিতে ন্যূনতম প্রভাব ফেলতে পারে।

### উপসংহার

ডিপেন্ডেন্সি ইনজেকশন একটি শক্তিশালী কৌশল যা কোডের মডুলারিটি এবং নমনীয়তা বাড়ায়। নির্ভরতাগুলির ইনস্ট্যানশিয়েশন এবং তাদের ব্যবহারের মধ্যে বিচ্ছিন্নতা তৈরি করে, ডেভেলপাররা এমন সিস্টেম তৈরি করতে পারেন যা পরিচালনা করা সহজ, পরীক্ষা করা সহজ এবং সম্প্রসারণযোগ্য। DI বোঝা এবং কার্যকরভাবে বাস্তবায়ন করা ভাল সফটওয়্যার আর্কিটেকচার এবং উন্নত উন্নয়ন অনুশীলনের দিকে নিয়ে যেতে পারে।




