/**
 * Problem 4: Largest palindrome product
 *
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product
 * of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two n-digit numbers.
 */

fn to_digits(num: u32) -> Vec<u32> {
    num.to_string()
        .chars()
        .map(|d| d.to_digit(10).unwrap())
        .collect::<Vec<_>>()
}

fn is_palindrome(number: u32) -> bool {
    let digits = to_digits(number);
    let half = ((digits.len() as f32) / 2 as f32).floor() as u32;
    for i in 0..half {
        if digits[i as usize] != digits[digits.len() - 1 - i as usize] {
            return false;
        }
    }
    true
}

pub fn largest_palindrome_product(n: u32) -> u32 {
    let mut digits: Vec<u32> = Vec::new();
    for _i in 0..n {
        digits.push(9)
    }
    let digits: Vec<String> = digits
        .into_iter()
        .map(|digit| digit.to_string() as String)
        .collect();

    let number = digits.join("").parse::<u32>().unwrap();
    let mut a = number;
    let mut b = number.clone();
    let limit = number / 10;

    loop {
        for _i in 0..limit {
            let product = a * b;

            if is_palindrome(product) {
                return product;
            } else {
                a = a - 1;
            }
        }

        b = b - 1;
        a = number;
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_digits() {
        assert_eq!(to_digits(101), Vec::from([1, 0, 1]));
        assert_eq!(to_digits(1546), Vec::from([1, 5, 4, 6]));
        assert_eq!(to_digits(42), Vec::from([4, 2]));
    }

    #[test]
    fn test_if_is_palindrome() {
        assert_eq!(is_palindrome(101), true);
        assert_eq!(is_palindrome(1001), true);
        assert_eq!(is_palindrome(13031), true);
        assert_eq!(is_palindrome(555), true);
        assert_eq!(is_palindrome(556655), true);
        assert_eq!(is_palindrome(215464512), true);

        assert_eq!(is_palindrome(1234), false);
        assert_eq!(is_palindrome(123456), false);
        assert_eq!(is_palindrome(12345), false);
        assert_eq!(is_palindrome(765), false);
    }

    #[test]
    fn tests_for_2() {
        assert_eq!(largest_palindrome_product(2), 9009);
    }

    #[test]
    fn tests_for_3() {
        assert_eq!(largest_palindrome_product(3), 906609);
    }
}
