/*
variable "output_md_file" {
  type        = string
  description = "location of the file where this cloud foundation kit module generates its documentation output"
}

resource "local_file" "output_md" {
  filename = var.output_md_file
  content  = <<EOF


### Active Policies

- **${data.azurerm_policy_definition.activity_log.display_name}**: ${data.azurerm_policy_definition.activity_log.description}

EOF
}
*/