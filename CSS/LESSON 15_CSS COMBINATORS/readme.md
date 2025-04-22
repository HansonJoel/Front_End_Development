# 🌐 CSS Combinators Tutorial

This repository contains my practice and notes from completing a tutorial on **CSS Combinators**. CSS combinators define relationships between selectors and help you style HTML elements based on their position or relationship to other elements.

## ✨ What I Learned

The four main CSS combinators covered in this tutorial:

1.  **Descendant Selector (` `)**  
    Targets all elements inside a specified element.  
    Example:

    ```css
    div p {
      color: blue;
    }
    ```

2.  **Child Selector (>)**
    Targets only direct children of a specified element.
    Example:

    ```css
    Copy code ul > li {
      list-style: square;
    }
    ```

3.  **Adjacent Sibling Selector (+)**
    Targets the next immediate sibling element.
    Example:

    ```css
    Copy code h1 + p {
      font-weight: bold;
    }
    ```

4.  **General Sibling Selector (~)**
    Targets all siblings that follow the specified element.
    Example:

    ```css
    Copy code h1 ~ p {
      color: gray;
    }
    ```

🧠 Author
Joel Hanson


