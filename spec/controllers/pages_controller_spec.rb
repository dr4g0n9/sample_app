require 'spec_helper'

describe PagesController do

  render_views

  before(:each) do
    @base_title = "Ruby on Rails Sample Application"
  end


  describe "GET 'home'" do
    it "returns http success" do
      get 'home'
      response.should be_success
    end

    it "should have the right title" do
      get 'home'
      response.should have_selector("title", :content => "#{@base_title} | Home")
    end

    it "should not have an empty body" do
      get 'home'
      response.body.should_not =~ /<body>\s*<\/body>/    
    end


  end

  describe "GET 'contact'" do


    it "should have the right title" do
      get 'contact'
      response.should have_selector("title", :content => "#{@base_title} | Contact")
    end

    it "returns http success" do
      get 'contact'
      response.should be_success
    end
  end

  describe "GET 'about'" do


    it "should have the right title" do
      get 'about'
      response.should have_selector("title", :content => "#{@base_title} | About")
    end

    it "returns http success" do
      get 'about'
      response.should be_success
    end
  end


end
