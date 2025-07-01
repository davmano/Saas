variable "aws_region" {
  default = "us-east-1"
}

variable "aws_profile" {
  default = "eks_terraform"
}

variable "cluster_name" {
  default = "saas-eks-cluster"
}

variable "node_group_name" {
  default = "saas-node-group"
}

variable "desired_capacity" {
  default = 2
}

variable "max_capacity" {
  default = 3
}

variable "min_capacity" {
  default = 1
}

variable "instance_type" {
  default = "t3.medium"
}
