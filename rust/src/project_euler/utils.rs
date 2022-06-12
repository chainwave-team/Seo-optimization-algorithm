/// return the n prime numbers
pub fn prime_number(n: usize) -> Vec<u32> {
    let mut primes: Vec<u32> = Vec::new();
    let mut i = 2;

    while n > primes.len() {
        if is_prime(i) {
            primes.push(i);
        }
        i += 1;
    }

    primes
}

pub fn is_prime(n: u32) -> bool {
    if n == 2 {
        return true;
    }

    if n % 2 == 0 {
        return false;
    }

    let sqrt_num = (n as f64).sqrt().floor() as u32;
    let mut prime = n != 1;
    for i in 2..=sqrt_num {
        if n % i == 0 {
            prime = false;
            break;
        }
    }

    prime
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_n_prime_number() {
        assert_eq!(prime_number(4), vec![2, 3, 5, 7]);
    }

    #[test]
    fn test_is_prime() {
        assert_eq!(is_prime(2), true);
        assert_eq!(is_prime(3), true);
        assert_eq!(is_prime(4), false);
        assert_eq!(is_prime(5), true);
        assert_eq!(is_prime(6), false);
        assert_eq!(is_prime(7), true);
        assert_eq!(is_prime(8), false);
        assert_eq!(is_prime(9), false);
        assert_eq!(is_prime(10), false);
        assert_eq!(is_prime(11), true);
        assert_eq!(is_prime(12), false);
        assert_eq!(is_prime(13), true);
        assert_eq!(is_prime(14), false);
    }
}
