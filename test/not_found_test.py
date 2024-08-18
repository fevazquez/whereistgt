import pytest
from selenium.webdriver.common.by import By

@pytest.fixture(scope="module")
def open_url(browser, url):
    browser.get(url)
    assert browser.title == "Where is TGT"

def test_title(browser, open_url):
    browser.get("http://localhost/fake-path")
    screen_title = browser.find_element(By.XPATH, "//h2").text
    assert screen_title == "404"

def test_body(browser, open_url):
    browser.get("http://localhost/fake-path")
    screen_text = browser.find_element(By.XPATH, "//p").text
    assert screen_text == "Here there be dragons"

def test_teardown(browser, open_url):
    browser.close()
    browser.quit()