/**
 * Problem 1: Multiples of 3 and 5
 *
 * If we list all the natural numbers below 10
 * that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5
 * below the provided parameter value number.
 */

pub fn multiples_of_3_and_5(value: u32) -> u32 {
    let mut multiples: Vec<u32> = Vec::new();

    // Find multiples of 3 and 5 under value number.
    for i in 0..value {
        if i % 3 == 0 || i % 5 == 0 {
            multiples.push(i as u32);
        }
    }

    // Return the sum of the multiples.
    multiples.iter().sum()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn tests_for_10() {
        assert_eq!(multiples_of_3_and_5(10), 23);
    }

    #[test]
    fn tests_for_49() {
        assert_eq!(multiples_of_3_and_5(49), 543);
    }

    #[test]
    fn tests_for_1000() {
        assert_eq!(multiples_of_3_and_5(1000), 233168);
    }

    #[test]
    fn tests_for_8456() {
        assert_eq!(multiples_of_3_and_5(8456), 16687353);
    }

    #[test]
    fn tests_for_19564() {
        assert_eq!(multiples_of_3_and_5(19564), 89301183);
    }
}
