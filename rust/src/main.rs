use shamirsecretsharing::*;
use hex;

fn shamir () -> String {
    let hex_str = "972146b21b16f89ac82e1331adcd9f09927f99ce54f78122bb6a41cad1c1fe24";

    // Convert the hex string to a Vec<u8>
    let mut data = hex::decode(hex_str).expect("Decoding failed");

    // Ensure the Vec<u8> is of size 64 by padding if necessary
    while data.len() < 64 {
        data.push(0); // Pad with zeros, for example
    }

    // Assuming `create_shares` and `combine_shares` are defined elsewhere and work as expected
    let count = 4;
    let threshold = 3; // Correcting the spelling
    // let mut shares = create_shares(&data, count, threshold).unwrap();

    let shares = create_shares(&data, count, threshold).unwrap();

    // Convert shares to hex strings
    let hex_shares: Vec<String> = shares.iter()
        .map(|share| hex::encode(share))
        .collect();

    // Example of printing hex stringified shares
    for (i, hex_share) in hex_shares.iter().enumerate() {
        println!("Share {}: {}", i, hex_share);
    }

    // Assuming `hex_shares` is a Vec<String> containing your hex-encoded shares
    let binary_shares: Result<Vec<Vec<u8>>, hex::FromHexError> = hex_shares.iter()
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


fn shamirGen(priv_key: &str) -> Vec<String> {
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

fn main() {
    let shares = shamirGen("972146b21b16f89ac82e1331adcd9f09927f99ce54f78122bb6a41cad1c1fe24");
    // Print the restored hex string
    println!("Restored Hex String: {}", shares[0].clone());
}