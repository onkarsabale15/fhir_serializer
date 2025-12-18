// "postal" | "physical" | "both"
enum EAddressType {
    POSTAL = "postal",
    PHYSICAL = "physical",
    BOTH = "both"
}

type TAddressType = `${EAddressType}`;

export { EAddressType };
export type { TAddressType }