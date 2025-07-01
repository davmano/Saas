resource "kubernetes_cluster_role_binding" "eks_admin_binding" {
  metadata {
    name = "eks-admin-binding"
  }

  role_ref {
    api_group = "rbac.authorization.k8s.io"
    kind      = "ClusterRole"
    name      = "cluster-admin"
  }

  subject {
    kind      = "Group"
    name      = "eks-admins"  # Must match the group in access_entries
    api_group = "rbac.authorization.k8s.io"
  }

  depends_on = [module.eks]
}
