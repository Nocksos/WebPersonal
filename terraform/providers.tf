terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
  # El backend se configurará dinámicamente mediante el comando 'terraform init' en el pipeline
  backend "azurerm" {}
}

provider "azurerm" {
  features {}
}
