pub fn hello() -> String {
    format!("Hello")
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        assert_eq!(hello(), String::from("Hello"));
    }
}
