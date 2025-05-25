// Java Program to Illustrate Address Class

package com.geeksforgeeks.org;

public class Address {
    private String houseNo;
    private String pincode;
    private String state;
    private String country;

    // Constructor of Address Class
    public Address(String houseNo, String pincode,
                   String state, String country)
    {
        // Super keyword refers to parent class
        super();
        // This keyword refers to current instance itself
        this.houseNo = houseNo;
        this.pincode = pincode;
        this.state = state;
        this.country = country;
    }

    // Method
    public String toString()
    {
        return "[" + houseNo + "," + pincode + "," + state
            + "," + country + "]";
    }
}