package com.pulsedemo.steps;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@Given("^$")
public void  throws Throwable {
    throw new PendingException();
}

@When("^enter valid username/password$")
public void enter valid username/password$ throws Throwable {
    throw new PendingException();
}

@Then ("^message login successfully$")
public void message login successfully throws Throwable {
    assertEquals("message login successfully", "");
}