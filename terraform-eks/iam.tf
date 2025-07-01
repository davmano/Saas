module "eks_admin_role" {
  source  = "terraform-aws-modules/iam/aws//modules/iam-assumable-role"
  version = "~> 5.0"

  role_name = "eks-admin-role"

  trusted_role_services = [
    "eks.amazonaws.com"
  ]

  create_role             = true
  create_instance_profile = false

  custom_role_policy_arns = [
    "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy",
    "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy",
    "arn:aws:iam::aws:policy/AmazonEC2FullAccess"
  ]
}

