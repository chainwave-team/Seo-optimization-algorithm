/**
 * Problem 2: Even Fibonacci Numbers
 *
 * Each new term in the Fibonacci sequence is generated
 * by adding the previous two terms.
 * By starting with 1 and 2, the first 10 terms will be:
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 * By considering the terms in the Fibonacci sequence
 * whose values do not exceed n,
 * find the sum of the even-valued terms.
 */
fn get_fibonacci_suite(n: usize) -> Vec<u32> {
    if n == 0 {
        return Vec::from([0]);
    }
    if n == 1 {
        return Vec::from([1]);
    }

    let mut terms = Vec::from([1, 2]);

    for i in 2..n {
        terms.push(terms.get(i - 2).unwrap() + terms.get(i - 1).unwrap());
    }

    terms
}

pub fn fibonacci_even_numbers(n: usize) -> u32 {
    let max = n as u32;
    get_fibonacci_suite(n)
        .into_iter()
        .filter(|term| term <= &max)
        .filter(|term| term % 2 == 0)
        .sum()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_fibonacci() {
        assert_eq!(get_fibonacci_suite(1), Vec::from([1]));
        assert_eq!(get_fibonacci_suite(2), Vec::from([1, 2]));
        assert_eq!(
            get_fibonacci_suite(10),
            Vec::from([1, 2, 3, 5, 8, 13, 21, 34, 55, 89])
        );
        assert_eq!(
            get_fibonacci_suite(12),
            Vec::from([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233])
        );
    }

    #[test]
    fn should_return_an_even_number() {
        let value = fibonacci_even_numbers(4);
        assert!(value % 2 == 0);
    }

    #[test]
    fn tests_for_8() {
        assert_eq!(fibonacci_even_numbers(8), 10);
    }

    #[test]
    fn tests_for_10() {
        assert_eq!(fibonacci_even_numbers(10), 10);
    }

    #[test]
    fn tests_for_34() {
        assert_eq!(fibonacci_even_numbers(34), 44);
    }
}
