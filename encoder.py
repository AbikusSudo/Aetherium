import sys, os, argparse, base64, hashlib
parser = argparse.ArgumentParser()
parser.add_argument("--key1", required=True, help="Hex key1 from env")
args = parser.parse_args()
KEY1 = bytes.fromhex(args.key1)
if not os.path.exists("source.encrypted"):
    print("-", file=sys.stderr)
    sys.exit(1)
with open("source.encrypted", "r", encoding="utf-8") as f:
    lines = f.read().splitlines()
key2_line = next((l for l in lines if l.startswith("#key2=")), None)
code_line = next((l for l in lines if l.startswith("code=")), None)
if not key2_line or not code_line:
    print("-", file=sys.stderr)
    sys.exit(1)
key2_hex = key2_line[len("#key2="):].strip()
key2 = bytes.fromhex(key2_hex)
encrypted_code = code_line[len("code="):].encode()
f1 = Fernet(base64.urlsafe_b64encode(hashlib.sha256(KEY1).digest()))
key0 = f1.decrypt(key2)
f2 = Fernet(base64.urlsafe_b64encode(hashlib.sha256(key0).digest()))
code_bytes = f2.decrypt(encrypted_code)
exec(code_bytes, {"__name__": "__main__"})
sys.exit(0)
