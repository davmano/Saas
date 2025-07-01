module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "20.8.3"

  cluster_name    = var.cluster_name
  cluster_version = "1.29"
  cluster_endpoint_public_access = true

  subnet_ids  = module.vpc.private_subnets
  vpc_id      = module.vpc.vpc_id
  enable_irsa = true

  access_entries = {
    eks_admin = {
      kubernetes_groups = ["eks-admins"]  # ✅ must NOT start with system:
      principal_arn     = "arn:aws:iam::151972243519:user/eks_terraform"
      username          = "eks_terraform"
    }
  }

  eks_managed_node_groups = {
    default = {
      desired_size    = var.desired_capacity
      max_size        = var.max_capacity
      min_size        = var.min_capacity
      instance_types  = [var.instance_type]
      capacity_type   = "ON_DEMAND"
    }
  }

  tags = {
    Env = "dev"
  }
}
