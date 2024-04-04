/// <refrence types="cypress" />

describe("Test Suites for login or register page", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/index.php?rt=account/create");
  });

  it("Should be able to create a new account for user", () => {
    // Fill Form
    cy.get("#AccountFrm_firstname").type("John");
    cy.get("#AccountFrm_lastname").type("Doe");
    // If says email is already exists,then change email
    cy.get("#AccountFrm_email").type("example1@abc.com");
    cy.get("#AccountFrm_telephone").type("12345678");
    cy.get("#AccountFrm_company").type("Automation Testing");
    cy.get("#AccountFrm_address_1").type("ABC Street");
    cy.get("#AccountFrm_country_id").select("Pakistan");
    cy.get("#AccountFrm_zone_id").select("North-West Frontier");
    cy.get("#AccountFrm_city").type("Karak");
    cy.get("#AccountFrm_postcode").type("27200");
    // If says username is not available change username
    cy.get("#AccountFrm_loginname").type("muhammadabrar1");
    cy.get("#AccountFrm_password").type("Abc123");
    cy.get("#AccountFrm_confirm").type("Abc123");
    cy.get("#AccountFrm_newsletter0").click();
    cy.get("#AccountFrm_agree").click();
    cy.get("button[title='Continue']").click();
    // Confirms that account is successfully created
    cy.url().should("include", "account/success");
    cy.get(".maintext").contains(" Your Account Has Been Created!");
  });

  it("should not create account if user put letters instead of numbers in phone input", () => {
    // Fill Form
    cy.get("#AccountFrm_firstname").type("John");
    cy.get("#AccountFrm_lastname").type("Doe");
    // If says email is already exists,then change email
    cy.get("#AccountFrm_email").type("example2@abc.com");
    // Error : still able to create account after putting letters in phone input
    cy.get("#AccountFrm_telephone").type("abcdefg");
    cy.get("#AccountFrm_company").type("Automation Testing");
    cy.get("#AccountFrm_address_1").type("ABC Street");
    cy.get("#AccountFrm_country_id").select("Pakistan");
    cy.get("#AccountFrm_zone_id").select("North-West Frontier");
    cy.get("#AccountFrm_city").type("Karak");
    cy.get("#AccountFrm_postcode").type("27200");
    // If says username is not available change username
    cy.get("#AccountFrm_loginname").type("muhammadabrar2");
    cy.get("#AccountFrm_password").type("Abc123");
    cy.get("#AccountFrm_confirm").type("Abc123");
    cy.get("#AccountFrm_newsletter0").click();
    cy.get("#AccountFrm_agree").click();
    cy.get("button[title='Continue']").click();
  });

  it("should not create account if user put wrong email address", () => {
    // Fill Form
    cy.get("#AccountFrm_firstname").type("John");
    cy.get("#AccountFrm_lastname").type("Doe");
    // If says email is already exists,then change email
    cy.get("#AccountFrm_email").type("exampleabc.com");
    cy.get("#AccountFrm_telephone").type("123456");
    cy.get("#AccountFrm_company").type("Automation Testing");
    cy.get("#AccountFrm_address_1").type("ABC Street");
    cy.get("#AccountFrm_country_id").select("Pakistan");
    cy.get("#AccountFrm_zone_id").select("North-West Frontier");
    cy.get("#AccountFrm_city").type("Karak");
    cy.get("#AccountFrm_postcode").type("27200");
    // If says username is not available change username
    cy.get("#AccountFrm_loginname").type("muhammadabrar3");
    cy.get("#AccountFrm_password").type("Abc123");
    cy.get("#AccountFrm_confirm").type("Abc123");
    cy.get("#AccountFrm_newsletter0").click();
    cy.get("#AccountFrm_agree").click();
    cy.get("button[title='Continue']").click();
  });

  it("should not create account if user is not agree with privacy policy", () => {
    // Fill Form
    cy.get("#AccountFrm_firstname").type("John");
    cy.get("#AccountFrm_lastname").type("Doe");
    // If says email is already exists,then change email
    cy.get("#AccountFrm_email").type("example3@abc.com");
    cy.get("#AccountFrm_telephone").type("123456");
    cy.get("#AccountFrm_company").type("Automation Testing");
    cy.get("#AccountFrm_address_1").type("ABC Street");
    cy.get("#AccountFrm_country_id").select("Pakistan");
    cy.get("#AccountFrm_zone_id").select("North-West Frontier");
    cy.get("#AccountFrm_city").type("Karak");
    cy.get("#AccountFrm_postcode").type("27200");
    // If says username is not available change username
    cy.get("#AccountFrm_loginname").type("muhammadabrar4");
    cy.get("#AccountFrm_password").type("Abc123");
    cy.get("#AccountFrm_confirm").type("Abc123");
    cy.get("#AccountFrm_newsletter0").click();
    cy.get("button[title='Continue']").click();
    // Verify Error Alert
    cy.get(".alert").contains("Error: You must agree to the Privacy Policy!");
  });

  it("Should be able to create a new account if user didn't select any option in newsletter", () => {
    // Fill Form
    cy.get("#AccountFrm_firstname").type("John");
    cy.get("#AccountFrm_lastname").type("Doe");
    // If says email is already exists,then change email
    cy.get("#AccountFrm_email").type("example4@abc.com");
    cy.get("#AccountFrm_telephone").type("12345678");
    cy.get("#AccountFrm_company").type("Automation Testing");
    cy.get("#AccountFrm_address_1").type("ABC Street");
    cy.get("#AccountFrm_country_id").select("Pakistan");
    cy.get("#AccountFrm_zone_id").select("North-West Frontier");
    cy.get("#AccountFrm_city").type("Karak");
    cy.get("#AccountFrm_postcode").type("27200");
    // If says username is not available change username
    cy.get("#AccountFrm_loginname").type("muhammadabrar4");
    cy.get("#AccountFrm_password").type("Abc123");
    cy.get("#AccountFrm_confirm").type("Abc123");
    // cy.get("#AccountFrm_newsletter0").click();
    cy.get("#AccountFrm_agree").click();
    cy.get("button[title='Continue']").click();
    // Confirms that account is successfully created
    cy.url().should("include", "account/success");
    cy.get(".maintext").contains(" Your Account Has Been Created!");
  });

  it("Should not create a new account if user name already registered", () => {
    // Fill Form
    cy.get("#AccountFrm_firstname").type("John");
    cy.get("#AccountFrm_lastname").type("Doe");
    // If says email is already exists,then change email
    cy.get("#AccountFrm_email").type("example6@abc.com");
    cy.get("#AccountFrm_telephone").type("12345678");
    cy.get("#AccountFrm_company").type("Automation Testing");
    cy.get("#AccountFrm_address_1").type("ABC Street");
    cy.get("#AccountFrm_country_id").select("Pakistan");
    cy.get("#AccountFrm_zone_id").select("North-West Frontier");
    cy.get("#AccountFrm_city").type("Karak");
    cy.get("#AccountFrm_postcode").type("27200");
    // If says username is not available change username
    cy.get("#AccountFrm_loginname").type("muhammadabrar1");
    cy.get("#AccountFrm_password").type("Abc123");
    cy.get("#AccountFrm_confirm").type("Abc123");
    cy.get("#AccountFrm_newsletter0").click();
    cy.get("#AccountFrm_agree").click();
    cy.get("button[title='Continue']").click();
    // Confirms alert
    cy.get(".alert").contains("Try different login name!");
  });

  it("Should not create a new account if email address already registered", () => {
    // Fill Form
    cy.get("#AccountFrm_firstname").type("John");
    cy.get("#AccountFrm_lastname").type("Doe");
    // If says email is already exists,then change email
    cy.get("#AccountFrm_email").type("example@abc.com");
    cy.get("#AccountFrm_telephone").type("12345678");
    cy.get("#AccountFrm_company").type("Automation Testing");
    cy.get("#AccountFrm_address_1").type("ABC Street");
    cy.get("#AccountFrm_country_id").select("Pakistan");
    cy.get("#AccountFrm_zone_id").select("North-West Frontier");
    cy.get("#AccountFrm_city").type("Karak");
    cy.get("#AccountFrm_postcode").type("27200");
    // If says username is not available change username
    cy.get("#AccountFrm_loginname").type("muhammadabrar8");
    cy.get("#AccountFrm_password").type("Abc123");
    cy.get("#AccountFrm_confirm").type("Abc123");
    cy.get("#AccountFrm_newsletter0").click();
    cy.get("#AccountFrm_agree").click();
    cy.get("button[title='Continue']").click();
    // Confirms alert
    cy.get(".alert").contains("E-Mail Address is already registered!");
  });
});
