Starting up the app:

$ npx create-expo-app app_name

ScrollView renders all its item in the list, even if there are 10,000 items
This is bad for performance if there is a long list

Alternative solution is FlatList
FlatList only renders item that user scroll near to them so it's optimized for a long list
item that is not visible to the screen won't be rendered yet

link to crash course:

https://www.youtube.com/watch?v=VozPNrt-LfE&list=PLb0ClR8shevW4tiahHNnqjliURItw-9mA&index=3&t=271s&ab_channel=Academind
