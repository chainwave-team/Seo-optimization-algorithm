/**
 * Problem 6: Sum square difference
 *
 * https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-6-sum-square-difference
 */

pub fn sum_square_difference(n: u64) -> u64 {
    square_of_sum(&n) - sum_of_squares(&n)
}

// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385
fn sum_of_squares(n: &u64) -> u64 {
    (1..=*n).map(|x| x * x).sum::<u64>()
}

// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)2 = 552 = 3025
fn square_of_sum(n: &u64) -> u64 {
    (1..=*n).sum::<u64>().pow(2)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_sum_square_difference() {
        assert_eq!(sum_square_difference(10), 2640);
        assert_eq!(sum_square_difference(20), 41230);
        assert_eq!(sum_square_difference(100), 25164150);
    }

    #[test]
    fn test_sum_of_squares() {
        assert_eq!(sum_of_squares(&10), 385);
    }

    #[test]
    fn test_square_of_sum() {
        assert_eq!(square_of_sum(&10), 3025);
    }
}
