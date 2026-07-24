variable "resource_group_name" {
  description = "Nombre del grupo de recursos en Azure"
  type        = string
  default     = "webPersonal"
}

variable "location" {
  description = "Región de Azure para el despliegue (ej. westeurope)"
  type        = string
  default     = "westeurope"
}

variable "swa_name" {
  description = "Nombre de la Azure Static Web App"
  type        = string
  default     = "web-personal-app"
}

variable "swa_sku" {
  description = "Nivel de servicio para la Static Web App (Free o Standard)"
  type        = string
  default     = "Free"
}
