#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;

module_manifest!();

pub fn main() {}

use shamirsecretsharing::*;
use hex;

fn shamirGen(priv_key: String) -> Vec<String> {
    let mut data = hex::decode(priv_key).expect("Decoding failed");
    // Ensure the Vec<u8> is of size 64 by padding if necessary
    while data.len() < 64 {
        data.push(0); // Pad with zeros, for example
    }
    let count = 4;
    let threshold = 3;
    let mut shares = create_shares(&data, count, threshold).unwrap();
    let hex_shares: Vec<String> = shares.iter()
    .map(|share| hex::encode(share))
    .collect();
    hex_shares
}

fn shamir(shares: Vec<String>) -> String {
    let binary_shares: Result<Vec<Vec<u8>>, hex::FromHexError> = shares.iter()
    .map(|hex_share| hex::decode(hex_share))
    .collect();

    // Check for errors during decoding
    let binary_shares = match binary_shares {
        Ok(shares) => shares,
        Err(e) => panic!("Failed to decode shares: {}", e),
    };

    // Recombine the shares to recover the original secret
    let mut restored = combine_shares(&binary_shares).unwrap().expect("Failed to combine shares");

    // Before comparison, truncate the restored data to the original length
    restored.truncate(32); // Original length before padding

    // Convert restored data back to a hex string for comparison
    let restored_hex_str = hex::encode(&restored);

    restored_hex_str
}

#[marine]
pub fn generate(priv_key: String) -> Vec<String> {
    shamirGen(priv_key)
}

#[marine]
pub fn openWallet(shares: Vec<String>) -> String {
    shamir(shares)
}