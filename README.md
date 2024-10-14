# Minimum Waiting Time

This repository contains an implementation of the minimumWaitingTime function. The function computes the minimum total waiting time for a set of queries, where each query takes a certain amount of time to execute. The goal is to arrange the queries in such a way that the total waiting time is minimized.

**Problem Description:**

You are given an array of positive integers where each integer represents the time required to execute a query. The waiting time of a query is defined as the time it takes for all previous queries to complete before it starts.

The objective is to return the minimum possible total waiting time.

Example

Given the following array of query times:


	queries = [3, 2, 1, 2, 6];

The minimum waiting time would be achieved by sorting the queries in ascending order and processing them in that order:

Sorted queries: [1, 2, 2, 3, 6]

The total waiting time is calculated as:

For the first query, no waiting time: 0
For the second query, the waiting time is 1
For the third query, the waiting time is 1 + 2 = 3
For the fourth query, the waiting time is 1 + 2 + 2 = 5
For the fifth query, the waiting time is 1 + 2 + 2 + 3 = 8
Total minimum waiting time = 0 + 1 + 3 + 5 + 8 = 17

Formula for Minimum Waiting Time: The key to minimizing the waiting time is to sort the queries in increasing order of duration. This ensures that shorter queries are executed first, thereby reducing the total waiting time.

**Code Explanation**

minimumWaitingTime(queries)

Input: An array of positive integers representing the duration of each query.

Output: An integer representing the minimum total waiting time.

Steps:

1. Sort the queries array in ascending order to minimize the waiting time.
2. Initialize shortestWaitingTime to keep track of the cumulative waiting time.
3. For each query (except the last one), accumulate the waiting times of the previous queries.
4. Return the total shortestWaitingTime.
   
**Time and Space Complexity**

Time Complexity: O(n log n), where n is the number of queries. This comes from the sorting step.

Space Complexity: O(1), since we sort the queries in place and only use a constant amount of additional space.

License: This project is licensed under the MIT License - see the LICENSE file for details.

